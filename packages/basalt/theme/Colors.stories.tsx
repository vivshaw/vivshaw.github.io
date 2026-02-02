import type { Meta, StoryObj } from "@storybook/react"

import { Heading, Text } from "../components"
import { tokens } from "./index.css"
import styles from "./stories.module.css"

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
    { name: "50", value: tokens.color["base-50"] },
    { name: "100", value: tokens.color["base-100"] },
    { name: "200", value: tokens.color["base-200"] },
    { name: "300", value: tokens.color["base-300"] },
    { name: "400", value: tokens.color["base-400"] },
    { name: "500", value: tokens.color["base-500"] },
    { name: "550", value: tokens.color["base-550"] },
    { name: "600", value: tokens.color["base-600"] },
    { name: "700", value: tokens.color["base-700"] },
    { name: "800", value: tokens.color["base-800"] },
    { name: "900", value: tokens.color["base-900"] },
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
        light and dark modes. Use semantic tokens for most purposes; raw palette
        values are available when needed.
      </Text>

      <section className={styles.section}>
        <Heading level="2">Neutral Palette</Heading>
        <Text size="small" className={styles.sectionDescription}>
          The underlying color scale from lightest (50) to darkest (900). These
          values are consistent across color modes.
        </Text>
        <PaletteStrip />
      </section>

      <section className={styles.section}>
        <Heading level="2">Semantic Colors</Heading>
        <Text size="small" className={styles.sectionDescription}>
          Use these tokens in your components. They automatically adapt to the
          current color mode.
        </Text>
        <div className={styles.cardGrid}>
          <ColorSwatch
            name="Text Default"
            tokenName="text-default"
            tokenValue={tokens.color.textDefault}
          />
          <ColorSwatch
            name="Text Muted"
            tokenName="text-muted"
            tokenValue={tokens.color.textMuted}
          />
          <ColorSwatch
            name="Background Default"
            tokenName="background-default"
            tokenValue={tokens.color.backgroundDefault}
          />
          <ColorSwatch
            name="Background Secondary"
            tokenName="background-secondary"
            tokenValue={tokens.color.backgroundSecondary}
          />
          <ColorSwatch
            name="Border Default"
            tokenName="border-default"
            tokenValue={tokens.color.borderDefault}
          />
          <ColorSwatch
            name="Border Muted"
            tokenName="border-muted"
            tokenValue={tokens.color.borderMuted}
          />
          <ColorSwatch
            name="Accent Default"
            tokenName="accent-default"
            tokenValue={tokens.color.accentDefault}
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
