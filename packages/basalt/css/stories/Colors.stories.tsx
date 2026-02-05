import type { Meta, StoryObj } from "@storybook/react"

import { Heading, Text } from "../.."
import styles from "./stories.module.css"

const palette = {
  "base-50": "#ffffff",
  "base-100": "#f5f5f4",
  "base-200": "#c7ccd1",
  "base-300": "#b7bdb4",
  "base-400": "#73737a",
  "base-500": "#484a53",
  "base-550": "#28282b",
  "base-600": "#1d2126",
  "base-700": "#111214",
  "base-800": "#08080a",
  "base-900": "#000000",
}

const semanticColors = {
  textDefault: "var(--basalt-color-text-default)",
  textMuted: "var(--basalt-color-text-muted)",
  backgroundDefault: "var(--basalt-color-background-default)",
  backgroundSecondary: "var(--basalt-color-background-secondary)",
  borderDefault: "var(--basalt-color-border-default)",
  borderMuted: "var(--basalt-color-border-muted)",
  accentDefault: "var(--basalt-color-accent-default)",
}

function ColorSwatch({
  name,
  tokenName,
  tokenValue,
}: {
  name: string
  tokenName: string
  tokenValue: string
}) {
  return (
    <div className={styles.row}>
      <div
        className={styles.colorSwatch}
        style={{ backgroundColor: tokenValue }}
      />
      <div>
        <Text font="sans" className={styles.bold}>
          {name}
        </Text>
        <code className={styles.monoSmall}>--basalt-color-{tokenName}</code>
      </div>
    </div>
  )
}

function PaletteStrip() {
  const shades = [
    { name: "50", value: palette["base-50"] },
    { name: "100", value: palette["base-100"] },
    { name: "200", value: palette["base-200"] },
    { name: "300", value: palette["base-300"] },
    { name: "400", value: palette["base-400"] },
    { name: "500", value: palette["base-500"] },
    { name: "550", value: palette["base-550"] },
    { name: "600", value: palette["base-600"] },
    { name: "700", value: palette["base-700"] },
    { name: "800", value: palette["base-800"] },
    { name: "900", value: palette["base-900"] },
  ]

  return (
    <div className={styles.paletteStrip}>
      {shades.map(({ name, value }) => (
        <div
          key={name}
          className={styles.paletteSwatch}
          style={{ backgroundColor: value }}
        >
          <span
            className={styles.monoSmall}
            style={{
              color: Number(name) >= 500 ? "#fff" : "#000",
              opacity: 0.8,
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

function ColorsDocumentation() {
  return (
    <div className={styles.page}>
      <Heading level="1">Color Tokens</Heading>
      <Text className={styles.lead}>
        The Basalt color system uses semantic tokens that automatically adapt to
        the current theme. Use semantic tokens for most purposes; raw palette
        values are available when needed.
      </Text>

      <section className={styles.section}>
        <Heading level="2">Neutral Palette</Heading>
        <Text size="small" className={styles.sectionDescription}>
          The underlying color scale from lightest (50) to darkest (900). These
          values are consistent across themes.
        </Text>
        <PaletteStrip />
      </section>

      <section className={styles.section}>
        <Heading level="2">Semantic Colors</Heading>
        <Text size="small" className={styles.sectionDescription}>
          Use these tokens in your components. They automatically adapt to the
          current theme.
        </Text>
        <div className={styles.cardGrid}>
          <ColorSwatch
            name="Text Default"
            tokenName="text-default"
            tokenValue={semanticColors.textDefault}
          />
          <ColorSwatch
            name="Text Muted"
            tokenName="text-muted"
            tokenValue={semanticColors.textMuted}
          />
          <ColorSwatch
            name="Background Default"
            tokenName="background-default"
            tokenValue={semanticColors.backgroundDefault}
          />
          <ColorSwatch
            name="Background Secondary"
            tokenName="background-secondary"
            tokenValue={semanticColors.backgroundSecondary}
          />
          <ColorSwatch
            name="Border Default"
            tokenName="border-default"
            tokenValue={semanticColors.borderDefault}
          />
          <ColorSwatch
            name="Border Muted"
            tokenName="border-muted"
            tokenValue={semanticColors.borderMuted}
          />
          <ColorSwatch
            name="Accent Default"
            tokenName="accent-default"
            tokenValue={semanticColors.accentDefault}
          />
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: "Tokens/Colors",
  component: ColorsDocumentation,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ColorsDocumentation>

export default meta
type Story = StoryObj<typeof meta>

export const AllColors: Story = {}
