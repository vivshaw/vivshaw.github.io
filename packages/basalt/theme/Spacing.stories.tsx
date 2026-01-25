import type { Meta, StoryObj } from "@storybook/react"

import { Box, Heading, Text } from "../components"
import { tokens } from "./index.css"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <Box as="section" sx={{ mb: "16" }}>
      <Heading level="2" sx={{ mb: "2" }}>
        {title}
      </Heading>
      {description && (
        <Text
          size="small"
          style={{ marginBottom: "1.5rem", color: tokens.color.textMuted }}
        >
          {description}
        </Text>
      )}
      {children}
    </Box>
  )
}

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
    <Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {spacings.map(({ name, value }) => (
        <Box
          key={name}
          sx={{ py: "2", px: "4" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: tokens.color.backgroundSecondary,
            borderRadius: "0.25rem",
          }}
        >
          <code
            style={{
              fontFamily: tokens.font.monospace,
              fontSize: "0.75rem",
              color: tokens.color.textMuted,
              width: "4rem",
              flexShrink: 0,
            }}
          >
            {name}
          </code>
          <div
            style={{
              height: "1.5rem",
              width: value,
              backgroundColor: tokens.color.accentDefault,
              borderRadius: "0.125rem",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: tokens.font.monospace,
              fontSize: "0.75rem",
              color: tokens.color.textMuted,
              marginLeft: "auto",
            }}
          >
            {value}
          </span>
        </Box>
      ))}
    </Box>
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
    <Box style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {spacings.map(({ name, value }) => (
        <Box
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <code
            style={{
              fontFamily: tokens.font.monospace,
              fontSize: "0.75rem",
              color: tokens.color.textMuted,
              width: "4rem",
              flexShrink: 0,
            }}
          >
            {name}
          </code>
          <div
            style={{
              height: "2rem",
              width: value,
              maxWidth: "100%",
              backgroundColor: tokens.color.accentDefault,
              borderRadius: "0.25rem",
              opacity: 0.6,
            }}
          />
          <span
            style={{
              fontFamily: tokens.font.monospace,
              fontSize: "0.75rem",
              color: tokens.color.textMuted,
            }}
          >
            {value}
          </span>
        </Box>
      ))}
    </Box>
  )
}

function UsageExample() {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
      }}
    >
      <Box
        sx={{ p: "6" }}
        style={{
          backgroundColor: tokens.color.backgroundSecondary,
          borderRadius: "0.5rem",
          border: `1px solid ${tokens.color.borderMuted}`,
        }}
      >
        <Text
          as="h3"
          font="sans"
          size="small"
          style={{ marginBottom: "1rem", fontWeight: 700 }}
        >
          Margin & Padding
        </Text>
        <code
          style={{
            display: "block",
            fontFamily: tokens.font.monospace,
            fontSize: "0.75rem",
            color: tokens.color.textMuted,
            whiteSpace: "pre-wrap",
          }}
        >
          {`sprinkles({
  m: "4",      // margin: 16px
  p: "2",      // padding: 8px
  mx: "auto",  // margin-left/right: auto
  py: "6",     // padding-top/bottom: 24px
})`}
        </code>
      </Box>

      <Box
        sx={{ p: "6" }}
        style={{
          backgroundColor: tokens.color.backgroundSecondary,
          borderRadius: "0.5rem",
          border: `1px solid ${tokens.color.borderMuted}`,
        }}
      >
        <Text
          as="h3"
          font="sans"
          size="small"
          style={{ marginBottom: "1rem", fontWeight: 700 }}
        >
          Dimensions
        </Text>
        <code
          style={{
            display: "block",
            fontFamily: tokens.font.monospace,
            fontSize: "0.75rem",
            color: tokens.color.textMuted,
            whiteSpace: "pre-wrap",
          }}
        >
          {`sprinkles({
  width: "64",     // 256px
  height: "32",    // 128px
  maxWidth: "168", // 672px (content)
})`}
        </code>
      </Box>

      <Box
        sx={{ p: "6" }}
        style={{
          backgroundColor: tokens.color.backgroundSecondary,
          borderRadius: "0.5rem",
          border: `1px solid ${tokens.color.borderMuted}`,
        }}
      >
        <Text
          as="h3"
          font="sans"
          size="small"
          style={{ marginBottom: "1rem", fontWeight: 700 }}
        >
          Gap
        </Text>
        <code
          style={{
            display: "block",
            fontFamily: tokens.font.monospace,
            fontSize: "0.75rem",
            color: tokens.color.textMuted,
            whiteSpace: "pre-wrap",
          }}
        >
          {`sprinkles({
  gap: "4",       // 16px
  columnGap: "6", // 24px
  rowGap: "2",    // 8px
})`}
        </code>
      </Box>

      <Box
        sx={{ p: "6" }}
        style={{
          backgroundColor: tokens.color.backgroundSecondary,
          borderRadius: "0.5rem",
          border: `1px solid ${tokens.color.borderMuted}`,
        }}
      >
        <Text
          as="h3"
          font="sans"
          size="small"
          style={{ marginBottom: "1rem", fontWeight: 700 }}
        >
          Responsive
        </Text>
        <code
          style={{
            display: "block",
            fontFamily: tokens.font.monospace,
            fontSize: "0.75rem",
            color: tokens.color.textMuted,
            whiteSpace: "pre-wrap",
          }}
        >
          {`sprinkles({
  p: {
    phone: "4",
    tablet: "6",
    desktop: "8",
  },
})`}
        </code>
      </Box>
    </Box>
  )
}

function SpacingDocumentation() {
  return (
    <Box
      sx={{ p: "8", color: "textDefault" }}
      style={{
        backgroundColor: tokens.color.backgroundDefault,
        minHeight: "100vh",
      }}
    >
      <Heading level="1" sx={{ mb: "2" }}>
        Spacing
      </Heading>
      <Text
        style={{
          marginBottom: "3rem",
          color: tokens.color.textMuted,
        }}
      >
        The spacing scale is based on a 4px grid (1 unit = 4px), similar to
        Tailwind. Use these tokens for consistent margins, padding, gaps, and
        dimensions.
      </Text>

      <Section
        title="Base Scale (0–96px)"
        description="Common spacing values for padding, margins, and gaps."
      >
        <SpacingScale />
      </Section>

      <Section
        title="Large Scale (112px–672px)"
        description="Larger values for layout dimensions, max-widths, and page-level spacing."
      >
        <LargeSpacings />
      </Section>

      <Section
        title="Usage with Sprinkles"
        description="Spacing tokens can be used with the sprinkles utility."
      >
        <UsageExample />
      </Section>

      <Section title="Shorthands">
        <Box
          sx={{ p: "6" }}
          style={{
            backgroundColor: tokens.color.backgroundSecondary,
            borderRadius: "0.5rem",
            border: `1px solid ${tokens.color.borderMuted}`,
          }}
        >
          <table
            style={{
              width: "100%",
              fontFamily: tokens.font.monospace,
              fontSize: "0.875rem",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.5rem",
                    borderBottom: `1px solid ${tokens.color.borderMuted}`,
                    fontFamily: tokens.font.sans,
                    fontWeight: 700,
                  }}
                >
                  Shorthand
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.5rem",
                    borderBottom: `1px solid ${tokens.color.borderMuted}`,
                    fontFamily: tokens.font.sans,
                    fontWeight: 700,
                  }}
                >
                  Properties
                </th>
              </tr>
            </thead>
            <tbody style={{ color: tokens.color.textMuted }}>
              {[
                { short: "m", props: "margin" },
                { short: "mt, mr, mb, ml", props: "margin-top, -right, etc." },
                { short: "mx", props: "margin-left, margin-right" },
                { short: "my", props: "margin-top, margin-bottom" },
                { short: "p", props: "padding" },
                { short: "pt, pr, pb, pl", props: "padding-top, -right, etc." },
                { short: "px", props: "padding-left, padding-right" },
                { short: "py", props: "padding-top, padding-bottom" },
              ].map(({ short, props }) => (
                <tr key={short}>
                  <td
                    style={{
                      padding: "0.5rem",
                      borderBottom: `1px solid ${tokens.color.borderMuted}`,
                    }}
                  >
                    {short}
                  </td>
                  <td
                    style={{
                      padding: "0.5rem",
                      borderBottom: `1px solid ${tokens.color.borderMuted}`,
                    }}
                  >
                    {props}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Section>
    </Box>
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
