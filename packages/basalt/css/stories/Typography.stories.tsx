import type { Meta, StoryObj } from "@storybook/react"
import clsx from "clsx"

import { Heading, Text } from "../.."
import styles from "./stories.module.css"

const fonts = {
  serif: "basalt-serif, basalt-serif-fallback, serif",
  sans: "basalt-sans, basalt-sans-fallback, sans-serif",
  monospace: "Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace",
}

function FontShowcase({
  name,
  fontFamily,
  tokenName,
  description,
  specimen,
}: {
  name: string
  fontFamily: string
  tokenName: string
  description: string
  specimen: string
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Text as="h3" font="sans" className={styles.bold}>
          {name}
        </Text>
        <code className={styles.monoSmall}>--basalt-font-{tokenName}</code>
      </div>
      <Text size="small" className={styles.cardDescription}>
        {description}
      </Text>
      <div className={styles.specimen} style={{ fontFamily }}>
        {specimen}
      </div>
      <div className={styles.weightGrid}>
        <span className={styles.weightSample} style={{ fontFamily }}>
          Regular 400
        </span>
        <span
          className={styles.weightSample}
          style={{ fontFamily, fontStyle: "italic" }}
        >
          Italic 400
        </span>
        <span
          className={clsx(styles.weightSample, styles.bold)}
          style={{ fontFamily }}
        >
          Bold 700
        </span>
        <span
          className={clsx(styles.weightSample, styles.bold)}
          style={{ fontFamily, fontStyle: "italic" }}
        >
          Bold Italic 700
        </span>
      </div>
    </div>
  )
}

function SizeScale() {
  const sizes = [
    { name: "100", size: "1rem", px: "16px" },
    { name: "200", size: "1.125rem", px: "18px" },
    { name: "300", size: "1.25rem", px: "20px" },
    { name: "400", size: "1.375rem", px: "22px" },
    { name: "500", size: "1.5rem", px: "24px" },
    { name: "600", size: "1.75rem", px: "28px" },
    { name: "700", size: "2rem", px: "32px" },
  ]

  return (
    <div className={styles.stack}>
      {sizes.map(({ name, size, px }) => (
        <div key={name} className={styles.scaleRow}>
          <code className={clsx(styles.monoSmall, styles.label)}>{name}</code>
          <span style={{ fontFamily: fonts.serif, fontSize: size, flex: 1 }}>
            The quick brown fox
          </span>
          <span className={styles.monoSmall}>{px}</span>
        </div>
      ))}
    </div>
  )
}

function TextStyles() {
  const textStyles = [
    {
      name: "heading1",
      label: "Heading 1",
      mobile: "24px",
      desktop: "32px",
      lineHeight: "1.3",
    },
    {
      name: "heading2",
      label: "Heading 2",
      mobile: "22px",
      desktop: "28px",
      lineHeight: "1.3",
    },
    {
      name: "heading3",
      label: "Heading 3",
      mobile: "20px",
      desktop: "24px",
      lineHeight: "1.3",
    },
    {
      name: "body",
      label: "Body",
      mobile: "20px",
      desktop: "24px",
      lineHeight: "1.4",
    },
    {
      name: "small",
      label: "Small",
      mobile: "16px",
      desktop: "18px",
      lineHeight: "1.4",
    },
  ]

  return (
    <div className={styles.stackWide}>
      {textStyles.map(({ name, label, mobile, desktop, lineHeight }) => (
        <div key={name} className={styles.card}>
          <div className={styles.cardHeader}>
            <Text as="h3" font="sans" className={styles.bold}>
              {label}
            </Text>
            <div className={clsx(styles.monoSmall, styles.metaRow)}>
              <span>Mobile: {mobile}</span>
              <span>Desktop: {desktop}</span>
              <span>Line height: {lineHeight}</span>
            </div>
          </div>
          <Text style={{ fontSize: desktop, lineHeight }}>
            {name.includes("heading")
              ? "A well-crafted heading"
              : "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs."}
          </Text>
          <code className={clsx(styles.codeBlock, styles.monoSmall)}>
            @mixin text-{name}
          </code>
        </div>
      ))}
    </div>
  )
}

function OpenTypeFeature({
  name,
  specimen,
  featureSettings,
}: {
  name: string
  specimen: string
  featureSettings: string
}) {
  return (
    <div className={styles.card}>
      <Text as="h3" font="sans" size="small" className={styles.bold}>
        {name}
      </Text>
      <Text
        className={styles.specimen}
        style={{ fontFeatureSettings: featureSettings }}
      >
        {specimen}
      </Text>
      <code className={clsx(styles.codeBlock, styles.monoSmall)}>
        font-feature-settings: {featureSettings}
      </code>
    </div>
  )
}

function TypographyDocumentation() {
  return (
    <div className={styles.page}>
      <Heading level="1">Typography</Heading>
      <Text className={styles.lead}>
        Basalt uses two primary fonts, both from MB Type: a serif, Equity, for
        body text and headings, and a sans-serif, Concourse, for UI elements.
        Both support regular, italic, bold, and bold italic weights. A system
        monospace font is used for code blocks.
      </Text>

      <section className={styles.section}>
        <Heading level="2">Font Families</Heading>
        <Text size="small" className={styles.sectionDescription}>
          The three font stacks available in the design system.
        </Text>
        <div className={styles.stackWide}>
          <FontShowcase
            name="Equity B (Serif)"
            fontFamily={fonts.serif}
            tokenName="serif"
            description="The primary typeface for body text and headings. A serif with excellent readability at various sizes."
            specimen="Typography is the craft of endowing human language with a durable visual form."
          />
          <FontShowcase
            name="Concourse (Sans)"
            fontFamily={fonts.sans}
            tokenName="sans"
            description="Used for UI elements, labels, and secondary text. A clean sans-serif that pairs well with Equity."
            specimen="Clean, modern, and highly legible."
          />
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Text as="h3" font="sans" className={styles.bold}>
                Monospace
              </Text>
              <code className={styles.monoSmall}>--basalt-font-monospace</code>
            </div>
            <Text size="small" className={styles.cardDescription}>
              System monospace stack for code blocks and technical content.
            </Text>
            <code className={styles.mono}>
              const greeting = &quot;Hello, world!&quot;;
            </code>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <Heading level="2">Font Size Scale</Heading>
        <Text size="small" className={styles.sectionDescription}>
          A seven-step scale from 16px to 32px. Use fontSize tokens for precise
          control, or text style mixins for responsive presets.
        </Text>
        <SizeScale />
      </section>

      <section className={styles.section}>
        <Heading level="2">Text Styles</Heading>
        <Text size="small" className={styles.sectionDescription}>
          Pre-configured responsive text styles that combine font size and line
          height. These automatically adjust between mobile and desktop
          breakpoints.
        </Text>
        <TextStyles />
      </section>

      <section className={styles.section}>
        <Heading level="2">OpenType Features</Heading>
        <Text size="small" className={styles.sectionDescription}>
          The serif and sans fonts include OpenType features for improved
          typography.
        </Text>
        <div className={styles.cardGrid}>
          <OpenTypeFeature
            name="Oldstyle Figures"
            specimen="0123456789"
            featureSettings="'onum'"
          />
          <OpenTypeFeature
            name="Small Caps"
            specimen="Small Caps Text"
            featureSettings={'"smcp", "c2sc"'}
          />
          <OpenTypeFeature
            name="Ligatures"
            specimen="fi fl ff ffi ffl"
            featureSettings="'liga'"
          />
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: "Tokens/Typography",
  component: TypographyDocumentation,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TypographyDocumentation>

export default meta
type Story = StoryObj<typeof meta>

export const AllTypography: Story = {}
