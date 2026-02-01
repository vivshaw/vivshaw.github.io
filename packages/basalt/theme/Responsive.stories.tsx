import type { Meta, StoryObj } from "@storybook/react"

import { Heading, Text } from "../components"
import { breakpoints, tokens } from "./index.css"

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
    <div
      style={{
        padding: "2rem",
        color: tokens.color.textDefault,
        backgroundColor: tokens.color.backgroundDefault,
        minHeight: "100vh",
      }}
    >
      <Heading level="1" style={{ marginBottom: "0.5rem" }}>
        Responsive
      </Heading>
      <Text
        style={{
          marginBottom: "3rem",
          color: tokens.color.textMuted,
        }}
      >
        Basalt uses a mobile-first responsive system with three breakpoints.
      </Text>

      <section style={{ marginBottom: "4rem" }}>
        <Heading level="2" style={{ marginBottom: "1.5rem" }}>
          Breakpoints
        </Heading>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {breakpointData.map(({ name, condition, range, description }) => (
            <div
              key={name}
              style={{
                padding: "1.5rem",
                backgroundColor: tokens.color.backgroundSecondary,
                borderRadius: "0.5rem",
                border: `1px solid ${tokens.color.borderMuted}`,
              }}
            >
              <div
                style={{
                  marginBottom: "0.75rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <Text as="h3" font="sans" style={{ fontWeight: 700 }}>
                  {name}
                </Text>
                <code
                  style={{
                    fontSize: "0.875rem",
                    fontFamily: tokens.font.monospace,
                    color: tokens.color.textMuted,
                  }}
                >
                  {range}
                </code>
              </div>
              <Text
                size="small"
                style={{
                  marginBottom: "0.75rem",
                  color: tokens.color.textMuted,
                }}
              >
                {description}
              </Text>
              <code
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontFamily: tokens.font.monospace,
                  color: tokens.color.textMuted,
                }}
              >
                {condition === "Default"
                  ? "Default (no media query)"
                  : condition}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <Heading level="2" style={{ marginBottom: "0.5rem" }}>
          Usage
        </Heading>
        <Text
          size="small"
          style={{ marginBottom: "1.5rem", color: tokens.color.textMuted }}
        >
          Responsive properties in sprinkles accept an object with breakpoint
          keys.
        </Text>

        <div
          style={{
            padding: "1.5rem",
            backgroundColor: tokens.color.backgroundSecondary,
            borderRadius: "0.5rem",
            border: `1px solid ${tokens.color.borderMuted}`,
          }}
        >
          <code
            style={{
              display: "block",
              fontFamily: tokens.font.monospace,
              fontSize: "0.875rem",
              color: tokens.color.textMuted,
              whiteSpace: "pre-wrap",
            }}
          >
            {`<Box
  sx={{
    p: {
      phone: "4",
      tablet: "6",
      desktop: "8",
    },
  }}
/>`}
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
