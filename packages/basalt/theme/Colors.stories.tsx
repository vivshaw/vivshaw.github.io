import type { Meta, StoryObj } from "@storybook/react"

import { Box, Heading, Text } from "../components"
import { tokens } from "./index.css"

/**
 * Color documentation component
 */
function ColorSwatch({
  name,
  tokenName,
  tokenValue,
}: {
  name: string
  tokenName: string
  tokenValue: string
  showBorder?: boolean
}) {
  return (
    <Box
      sx={{ py: "3", px: "4" }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <div
        style={{
          width: "4rem",
          height: "4rem",
          borderRadius: "0.5rem",
          backgroundColor: tokenValue,
          border: `1px solid ${tokens.color.borderMuted}`,
          flexShrink: 0,
        }}
      />
      <Box>
        <Text font="sans" style={{ fontWeight: 700, marginBottom: "0.25rem" }}>
          {name}
        </Text>
        <code
          style={{
            fontSize: "0.875rem",
            color: tokens.color.textMuted,
            fontFamily: tokens.font.monospace,
          }}
        >
          tokens.color.{tokenName}
        </code>
      </Box>
    </Box>
  )
}

function ColorSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <Box as="section" sx={{ mb: "12" }}>
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
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "0.5rem",
        }}
      >
        {children}
      </Box>
    </Box>
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
    <Box
      style={{
        display: "flex",
        borderRadius: "0.5rem",
        overflow: "hidden",
        border: `1px solid ${tokens.color.borderMuted}`,
      }}
    >
      {shades.map(({ name, value }) => (
        <Box
          key={name}
          sx={{ pb: "2" }}
          style={{
            flex: 1,
            height: "5rem",
            backgroundColor: value,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontFamily: tokens.font.monospace,
              color: Number(name) >= 500 ? "#fff" : "#000",
              opacity: 0.8,
            }}
          >
            {name}
          </span>
        </Box>
      ))}
    </Box>
  )
}

function ColorsDocumentation() {
  return (
    <Box
      sx={{ p: "8", color: "textDefault" }}
      style={{
        backgroundColor: tokens.color.backgroundDefault,
        minHeight: "100vh",
      }}
    >
      <Heading level="1" sx={{ mb: "2" }}>
        Color Tokens
      </Heading>
      <Text
        style={{
          marginBottom: "3rem",
          color: tokens.color.textMuted,
        }}
      >
        The Basalt color system uses semantic tokens that automatically adapt to
        light and dark modes. Use semantic tokens for most purposes; raw palette
        values are available when needed.
      </Text>

      <ColorSection
        title="Neutral Palette"
        description="The underlying color scale from lightest (50) to darkest (900). These values are consistent across color modes."
      >
        <div style={{ gridColumn: "1 / -1" }}>
          <PaletteStrip />
        </div>
      </ColorSection>

      <ColorSection
        title="Semantic Colors"
        description="Use these tokens in your components. They automatically adapt to the current color mode."
      >
        <ColorSwatch
          name="Text Default"
          tokenName="textDefault"
          tokenValue={tokens.color.textDefault}
        />
        <ColorSwatch
          name="Text Muted"
          tokenName="textMuted"
          tokenValue={tokens.color.textMuted}
        />
        <ColorSwatch
          name="Background Default"
          tokenName="backgroundDefault"
          tokenValue={tokens.color.backgroundDefault}
        />
        <ColorSwatch
          name="Background Secondary"
          tokenName="backgroundSecondary"
          tokenValue={tokens.color.backgroundSecondary}
        />
        <ColorSwatch
          name="Border Default"
          tokenName="borderDefault"
          tokenValue={tokens.color.borderDefault}
        />
        <ColorSwatch
          name="Border Muted"
          tokenName="borderMuted"
          tokenValue={tokens.color.borderMuted}
        />
        <ColorSwatch
          name="Accent Default"
          tokenName="accentDefault"
          tokenValue={tokens.color.accentDefault}
        />
      </ColorSection>
    </Box>
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
