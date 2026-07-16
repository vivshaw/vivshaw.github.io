import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/**
 * shared renderer for the site's social preview (Open Graph) images.
 *
 * can't use Next's `opengraph-image` file convention here, as it doesn't emit images for dynamic
 * `[slug]` routes under `output: "export"`. (see github.com/vercel/next.js/issues/51147)
 * instead each image is a static Route Handler that calls `renderOgImage` and returns this
 * `ImageResponse`, which Next _does_ render to a real file at build time.
 */

/** 1200x630 is the standard Open Graph / Twitter `summary_large_image` size. */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

/**
 * mirrors the Basalt design tokens
 */
const basalt = {
  /** Equity, the serif registered with Satori below = `--basalt-font-serif`. */
  fontSerif: "Equity",
  /** `--basalt-font-weight-normal`. Basalt headings and body text are all normal weight. */
  fontWeightNormal: 400,
  /** `--basalt-line-height-heading`. */
  lineHeightHeading: 1.3,
  color: {
    textDefault: "#c7ccd1", // --basalt-color-text-default for dark theme (= base-300)
  },
  /** `--basalt-sizing-*`, resolved to px (1rem = 16px). */
  sizing: {
    4: 16, // --basalt-sizing-4
    20: 80, // --basalt-sizing-20
  },
} as const;

/** a dark scrim over the photo, so the title stays legible regardless of what's behind it. */
const SCRIM =
  "linear-gradient(105deg, rgba(8,8,10,0.9) 0%, rgba(8,8,10,0.66) 52%, rgba(17,18,20,0.45) 100%)";

/**
 * the brand serif (Equity) is available as `.otf` on the font CDN, which Satori can read directly
 */
const FONT_BASE_URL = "https://fonts.vivsha.ws/fonts";
const FONT_URLS = {
  equityRegular: `${FONT_BASE_URL}/Equity_B/Equity B Regular.otf`,
  equityItalic: `${FONT_BASE_URL}/Equity_B/Equity B Italic.otf`,
} as const;

/** the dark mode home page background. reused as the backdrop for social cards. */
const BACKGROUND_IMAGE_PATH = "public/home-bg-dark-optimized.jpg";

type LoadedFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400;
  style: "normal" | "italic";
};

type OgAssets = {
  fonts: LoadedFont[];
  backgroundDataUri: string;
};

let assetsPromise: Promise<OgAssets> | undefined;
function loadAssets(): Promise<OgAssets> {
  assetsPromise ??= (async () => {
    const [equityRegular, equityItalic] = await Promise.all(
      [FONT_URLS.equityRegular, FONT_URLS.equityItalic].map((url) =>
        fetch(encodeURI(url)).then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch OG font ${url}: ${response.status}`);
          }
          return response.arrayBuffer();
        }),
      ),
    );

    const backgroundBuffer = await readFile(join(process.cwd(), BACKGROUND_IMAGE_PATH));
    const backgroundDataUri = `data:image/jpeg;base64,${backgroundBuffer.toString("base64")}`;

    return {
      fonts: [
        { name: basalt.fontSerif, data: equityRegular, weight: 400, style: "normal" },
        { name: basalt.fontSerif, data: equityItalic, weight: 400, style: "italic" },
      ],
      backgroundDataUri,
    };
  })();

  return assetsPromise;
}

/**
 * picks the heading size, shared by the title and the blurb. sizing driven by whichever of the two
 * is longer, to keep the pair from overflowing the card.
 */
function headingFontSize(title: string, blurb?: string): number {
  const longest = Math.max(title.length, blurb?.length ?? 0);
  if (longest > 64) return 44;
  if (longest > 40) return 50;
  if (longest > 22) return 58;
  return 64;
}

type RenderOgImageOptions = {
  /** the headline, generally a post or page title */
  title: string;
  /** optional supporting line under the title, set italic */
  blurb?: string;
};

/**
 * renders a social preview image. used by the `og.png` route handlers.
 */
export async function renderOgImage({
  title,
  blurb,
}: RenderOgImageOptions): Promise<ImageResponse> {
  const { fonts, backgroundDataUri } = await loadAssets();
  // keep the blurb to a single tidy line or two. long blurbs are trimmed rather than overflowing.
  const trimmedBlurb = blurb && blurb.length > 120 ? `${blurb.slice(0, 117).trimEnd()}…` : blurb;
  // title and blurb share one size, the way the blog itself does.
  const headingSize = headingFontSize(title, trimmedBlurb);

  return new ImageResponse(
    <div style={{ position: "relative", display: "flex", width: "100%", height: "100%" }}>
      {/* the home page photo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundImage: `url(${backgroundDataUri})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* legibility scrim */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundImage: SCRIM,
        }}
      />

      {/* content */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: basalt.sizing[20],
        }}
      >
        {/* title & blurb, mirroring the blog's headings. serif, same size and color, the blurb set
            apart by italics */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <div
            style={{
              display: "flex",
              fontFamily: basalt.fontSerif,
              fontWeight: basalt.fontWeightNormal,
              fontSize: headingSize,
              lineHeight: basalt.lineHeightHeading,
              color: basalt.color.textDefault,
            }}
          >
            {title}
          </div>
          {trimmedBlurb ? (
            <div
              style={{
                display: "flex",
                fontFamily: basalt.fontSerif,
                fontWeight: basalt.fontWeightNormal,
                fontStyle: "italic",
                fontSize: headingSize,
                lineHeight: basalt.lineHeightHeading,
                color: basalt.color.textDefault,
              }}
            >
              {trimmedBlurb}
            </div>
          ) : null}
        </div>

        {/* the site wordmark, tucked into the top-left corner */}
        <div
          style={{
            position: "absolute",
            top: basalt.sizing[4],
            left: basalt.sizing[4],
            display: "flex",
            fontFamily: basalt.fontSerif,
            fontWeight: basalt.fontWeightNormal,
            fontStyle: "italic",
            fontSize: 34,
            lineHeight: basalt.lineHeightHeading,
            color: basalt.color.textDefault,
          }}
        >
          vivshaw&rsquo;s
        </div>
      </div>
    </div>,
    {
      ...OG_IMAGE_SIZE,
      fonts,
    },
  );
}
