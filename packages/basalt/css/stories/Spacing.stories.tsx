import type { Meta, StoryObj } from "@storybook/react"
import clsx from "clsx"

import { Heading, Text } from "../.."
import styles from "./stories.module.css"

function SpacingScale() {
  const spacings = [
    { name: "0", value: "0px" },
    { name: "half", value: "2px" },
    { name: "1", value: "4px" },
    { name: "1-half", value: "6px" },
    { name: "2", value: "8px" },
    { name: "2-half", value: "10px" },
    { name: "3", value: "12px" },
    { name: "3-half", value: "14px" },
    { name: "4", value: "16px" },
    { name: "5", value: "20px" },
    { name: "6", value: "24px" },
    { name: "7", value: "28px" },
    { name: "8", value: "32px" },
    { name: "9", value: "36px" },
    { name: "10", value: "40px" },
    { name: "11", value: "44px" },
    { name: "12", value: "48px" },
    { name: "14", value: "56px" },
    { name: "16", value: "64px" },
    { name: "20", value: "80px" },
    { name: "24", value: "96px" },
  ]

  return (
    <div className={styles.stackTight}>
      {spacings.map(({ name, value }) => (
        <div key={name} className={styles.scaleRow}>
          <code className={clsx(styles.monoSmall, styles.label)}>{name}</code>
          <div className={styles.spacingBar} style={{ width: value }} />
          <span className={styles.monoSmall}>{value}</span>
        </div>
      ))}
    </div>
  )
}

function LargeSpacings() {
  const spacings = [
    { name: "28", value: "112px" },
    { name: "32", value: "128px" },
    { name: "36", value: "144px" },
    { name: "40", value: "160px" },
    { name: "44", value: "176px" },
    { name: "48", value: "192px" },
    { name: "52", value: "208px" },
    { name: "56", value: "224px" },
    { name: "60", value: "240px" },
    { name: "64", value: "256px" },
    { name: "72", value: "288px" },
    { name: "80", value: "320px" },
    { name: "96", value: "384px" },
    { name: "168", value: "672px" },
  ]

  return (
    <div className={styles.stack}>
      {spacings.map(({ name, value }) => (
        <div key={name} className={styles.row}>
          <code className={clsx(styles.monoSmall, styles.label)}>{name}</code>
          <div className={styles.spacingBarLarge} style={{ width: value }} />
          <span className={styles.monoSmall}>{value}</span>
        </div>
      ))}
    </div>
  )
}

function UsageExample() {
  return (
    <div className={styles.cardGrid}>
      {[
        {
          title: "Margin & Padding",
          code: `.card {
  margin: var(--basalt-sizing-4);    /* 16px */
  padding: var(--basalt-sizing-2);   /* 8px */
}`,
        },
        {
          title: "Dimensions",
          code: `.container {
  width: var(--basalt-sizing-64);      /* 256px */
  height: var(--basalt-sizing-32);     /* 128px */
  max-width: var(--basalt-sizing-168); /* 672px */
}`,
        },
        {
          title: "Gap",
          code: `.grid {
  gap: var(--basalt-sizing-4);        /* 16px */
  column-gap: var(--basalt-sizing-6); /* 24px */
  row-gap: var(--basalt-sizing-2);    /* 8px */
}`,
        },
      ].map(({ title, code }) => (
        <div key={title} className={styles.card}>
          <Text as="h3" font="sans" size="small" className={styles.bold}>
            {title}
          </Text>
          <code className={styles.codeBlock}>{code}</code>
        </div>
      ))}
    </div>
  )
}

function SpacingDocumentation() {
  return (
    <div className={styles.page}>
      <Heading level="1">Spacing</Heading>
      <Text className={styles.lead}>
        The spacing scale is based on a 4px grid (1 unit = 4px), similar to
        Tailwind. Use these tokens for consistent margins, padding, gaps, and
        dimensions.
      </Text>

      <section className={styles.section}>
        <Heading level="2">Base Scale (0–96px)</Heading>
        <Text size="small" className={styles.sectionDescription}>
          Common spacing values for padding, margins, and gaps.
        </Text>
        <SpacingScale />
      </section>

      <section className={styles.section}>
        <Heading level="2">Large Scale (112px–672px)</Heading>
        <Text size="small" className={styles.sectionDescription}>
          Larger values for layout dimensions, max-widths, and page-level
          spacing.
        </Text>
        <LargeSpacings />
      </section>

      <section className={styles.section}>
        <Heading level="2">Usage</Heading>
        <Text size="small" className={styles.sectionDescription}>
          Spacing tokens are available as CSS custom properties.
        </Text>
        <UsageExample />
      </section>
    </div>
  )
}

const meta = {
  title: "Tokens/Spacing",
  component: SpacingDocumentation,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SpacingDocumentation>

export default meta
type Story = StoryObj<typeof meta>

export const AllSpacing: Story = {}
