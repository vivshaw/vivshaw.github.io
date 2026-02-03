import type { Meta, StoryObj } from "@storybook/react"

import { Heading, Text } from "../.."
import styles from "./stories.module.css"

const breakpoints = {
  tablet: "(min-width: 541px)",
  desktop: "(min-width: 736px)",
}

function ResponsiveDocumentation() {
  const breakpointData = [
    {
      name: "Phone",
      condition: "Default",
      range: "0 – 540px",
      description: "Mobile devices in portrait orientation.",
    },
    {
      name: "Tablet",
      condition: breakpoints.tablet,
      range: "541 – 735px",
      description: "Small tablets and large phones in landscape.",
    },
    {
      name: "Desktop",
      condition: breakpoints.desktop,
      range: "736px +",
      description: "Laptops, desktops, and larger screens.",
    },
  ]

  return (
    <div className={styles.page}>
      <Heading level="1">Responsive</Heading>
      <Text className={styles.lead}>
        Basalt uses a mobile-first responsive system with three breakpoints.
      </Text>

      <section className={styles.section}>
        <Heading level="2">Breakpoints</Heading>
        <div className={styles.stack}>
          {breakpointData.map(({ name, condition, range, description }) => (
            <div key={name} className={styles.card}>
              <div className={styles.cardHeader}>
                <Text as="h3" font="sans" className={styles.bold}>
                  {name}
                </Text>
                <code className={styles.mono}>{range}</code>
              </div>
              <Text size="small" className={styles.textMuted}>
                {description}
              </Text>
              <code className={styles.monoSmall}>
                {condition === "Default"
                  ? "Default (no media query)"
                  : condition}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Heading level="2">Usage</Heading>
        <Text size="small" className={styles.sectionDescription}>
          Use Basalt's breakpoint mixins for responsive styles.
        </Text>
        <div className={styles.card}>
          <code className={styles.codeBlock}>
            {`.content {
  padding: var(--basalt-sizing-4);

  @mixin tablet {
    padding: var(--basalt-sizing-6);
  }
  @mixin desktop {
    padding: var(--basalt-sizing-8);
  }
}`}
          </code>
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: "Tokens/Responsive",
  component: ResponsiveDocumentation,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ResponsiveDocumentation>

export default meta
type Story = StoryObj<typeof meta>

export const Breakpoints: Story = {}
