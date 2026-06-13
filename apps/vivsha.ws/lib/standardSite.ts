/**
 * standard.site utils
 */

import { TID } from "@atproto/common-web";
import { z } from "zod";

/** the DID of the AT Protocol repo that hosts the records (my `@vivsha.ws` handle) */
const DID = "did:plc:at3ztgbmp5pdxmxqhx7tp3jo";

const COLLECTION_PUBLICATION = "site.standard.publication";
const COLLECTION_DOCUMENT = "site.standard.document";

/**
 * get a deterministic 10-bit clock id from a post slug.
 */
function clockIdForSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash % 1024;
}

/**
 * the publication's TID.
 * generated via `TID.fromTime(Date.parse("2026-06-10T00:00:00.000Z") * 1000, 0)`.
 */
export const PUBLICATION_RKEY = "3mnvfqfsk2222";

/** the AT-URI of the publication record */
export const publicationUri = `at://${DID}/${COLLECTION_PUBLICATION}/${PUBLICATION_RKEY}`;

/** the TID for a post, derived from its publish date and slug */
export function documentRkey(date: Date | string, slug: string): string {
  return TID.fromTime(new Date(date).getTime() * 1000, clockIdForSlug(slug)).toString();
}

/** the AT-URI of the document record for a given post */
export function documentUri(slug: string, date: Date | string): string {
  return `at://${DID}/${COLLECTION_DOCUMENT}/${documentRkey(date, slug)}`;
}

/** an RGB color, per `site.standard.theme.color#rgb` */
const Rgb = z.object({
  $type: z.literal("site.standard.theme.color#rgb"),
  r: z.number().int().min(0).max(255),
  g: z.number().int().min(0).max(255),
  b: z.number().int().min(0).max(255),
});

/** a publication theme, per `site.standard.theme.basic` */
const BasicTheme = z.object({
  $type: z.literal("site.standard.theme.basic"),
  background: Rgb,
  foreground: Rgb,
  accent: Rgb,
  accentForeground: Rgb,
});

function rgb(r: number, g: number, b: number): z.infer<typeof Rgb> {
  return { $type: "site.standard.theme.color#rgb", r, g, b };
}

/**
 * the publication theme, mirroring Basalt's dark-mode tokens
 *   background       = base-900 (#111214)  - background-default
 *   foreground       = base-300 (#c7ccd1)  — text-default
 *   accent           = base-400 (#b7bdb4)  — accent-default
 *   accentForeground = base-900 (#111214)  — dark text on the light accent
 */
export const basicTheme = BasicTheme.parse({
  $type: "site.standard.theme.basic",
  background: rgb(17, 18, 20),
  foreground: rgb(199, 204, 209),
  accent: rgb(183, 189, 180),
  accentForeground: rgb(17, 18, 20),
});
