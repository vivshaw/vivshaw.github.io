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
      <Heading level="2" style={{ marginBottom: "0.5rem" }}>
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
    <Box
      sx={{ mb: "8", p: "6" }}
      style={{
        backgroundColor: tokens.color.backgroundSecondary,
        borderRadius: "0.5rem",
        border: `1px solid ${tokens.color.borderMuted}`,
      }}
    >
      <Box
        sx={{ mb: "4" }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Text
          as="h3"
          font="sans"
          style={{ fontWeight: 700, color: tokens.color.textDefault }}
        >
          {name}
        </Text>
        <code
          style={{
            fontSize: "0.75rem",
            fontFamily: tokens.font.monospace,
            color: tokens.color.textMuted,
          }}
        >
          tokens.font.{tokenName}
        </code>
      </Box>
      <Text
        size="small"
        style={{ marginBottom: "1rem", color: tokens.color.textMuted }}
      >
        {description}
      </Text>
      <Box
        style={{
          fontFamily,
          fontSize: "1.5rem",
          color: tokens.color.textDefault,
          lineHeight: 1.4,
        }}
      >
        {specimen}
      </Box>
      <Box
        sx={{ mt: "6", pt: "6" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          borderTop: `1px solid ${tokens.color.borderMuted}`,
        }}
      >
        <div>
          <span
            style={{
              fontFamily,
              fontWeight: 400,
              fontSize: "1.125rem",
              color: tokens.color.textDefault,
            }}
          >
            Regular 400
          </span>
        </div>
        <div>
          <span
            style={{
              fontFamily,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1.125rem",
              color: tokens.color.textDefault,
            }}
          >
            Italic 400
          </span>
        </div>
        <div>
          <span
            style={{
              fontFamily,
              fontWeight: 700,
              fontSize: "1.125rem",
              color: tokens.color.textDefault,
            }}
          >
            Bold 700
          </span>
        </div>
        <div>
          <span
            style={{
              fontFamily,
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "1.125rem",
              color: tokens.color.textDefault,
            }}
          >
            Bold Italic 700
          </span>
        </div>
      </Box>
    </Box>
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
    <Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {sizes.map(({ name, size, px }) => (
        <Box
          key={name}
          sx={{ py: "3", px: "4" }}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1rem",
            backgroundColor: tokens.color.backgroundSecondary,
            borderRadius: "0.5rem",
          }}
        >
          <code
            style={{
              fontFamily: tokens.font.monospace,
              fontSize: "0.75rem",
              color: tokens.color.textMuted,
              width: "3rem",
              flexShrink: 0,
            }}
          >
            {name}
          </code>
          <span
            style={{
              fontFamily: tokens.font.serif,
              fontSize: size,
              color: tokens.color.textDefault,
              flex: 1,
            }}
          >
            The quick brown fox
          </span>
          <span
            style={{
              fontFamily: tokens.font.monospace,
              fontSize: "0.75rem",
              color: tokens.color.textMuted,
            }}
          >
            {px}
          </span>
        </Box>
      ))}
    </Box>
  )
}

function TextStyles() {
  const styles = [
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
    <Box style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {styles.map(({ name, label, mobile, desktop, lineHeight }) => (
        <Box
          key={name}
          sx={{ p: "6" }}
          style={{
            backgroundColor: tokens.color.backgroundSecondary,
            borderRadius: "0.5rem",
            border: `1px solid ${tokens.color.borderMuted}`,
          }}
        >
          <Box
            sx={{ mb: "4" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text as="h3" font="sans" style={{ fontWeight: 700 }}>
              {label}
            </Text>
            <Box
              style={{
                display: "flex",
                gap: "1rem",
                fontFamily: tokens.font.monospace,
                fontSize: "0.75rem",
                color: tokens.color.textMuted,
              }}
            >
              <span>Mobile: {mobile}</span>
              <span>Desktop: {desktop}</span>
              <span>Line height: {lineHeight}</span>
            </Box>
          </Box>
          <Text
            style={{
              fontSize: desktop,
              lineHeight,
            }}
          >
            {name.includes("heading")
              ? "A well-crafted heading"
              : "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs."}
          </Text>
          <code
            style={{
              display: "block",
              marginTop: "1rem",
              fontFamily: tokens.font.monospace,
              fontSize: "0.75rem",
              color: tokens.color.textMuted,
            }}
          >
            sprinkles({"{"} text: "{name}" {"}"})
          </code>
        </Box>
      ))}
    </Box>
  )
}

function TypographyDocumentation() {
  return (
    <Box
      sx={{ p: "8", color: "textDefault" }}
      style={{
        backgroundColor: tokens.color.backgroundDefault,
        minHeight: "100vh",
      }}
    >
      <Heading level="1" style={{ marginBottom: "0.5rem" }}>
        Typography
      </Heading>
      <Text
        style={{
          marginBottom: "3rem",
          color: tokens.color.textMuted,
        }}
      >
        Basalt uses two primary fonts, both from MB Type: a serif, Equity, for
        body text and headings, and a sans-serif, Concourse, for UI elements.
        Both support regular, italic, bold, and bold italic weights. A system
        monospace font is used for code blocks.
      </Text>

      <Section
        title="Font Families"
        description="The three font stacks available in the design system."
      >
        <FontShowcase
          name="Equity B (Serif)"
          fontFamily={tokens.font.serif}
          tokenName="serif"
          description="The primary typeface for body text and headings. A serif with excellent readability at various sizes."
          specimen="Typography is the craft of endowing human language with a durable visual form."
        />
        <FontShowcase
          name="Concourse (Sans)"
          fontFamily={tokens.font.sans}
          tokenName="sans"
          description="Used for UI elements, labels, and secondary text. A clean sans-serif that pairs well with Equity."
          specimen="Clean, modern, and highly legible."
        />
        <Box
          sx={{ p: "6" }}
          style={{
            backgroundColor: tokens.color.backgroundSecondary,
            borderRadius: "0.5rem",
            border: `1px solid ${tokens.color.borderMuted}`,
          }}
        >
          <Box
            sx={{ mb: "4" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Text as="h3" font="sans" style={{ fontWeight: 700 }}>
              Monospace
            </Text>
            <code
              style={{
                fontSize: "0.75rem",
                fontFamily: tokens.font.monospace,
                color: tokens.color.textMuted,
              }}
            >
              tokens.font.monospace
            </code>
          </Box>
          <Text
            size="small"
            style={{ marginBottom: "1rem", color: tokens.color.textMuted }}
          >
            System monospace stack for code blocks and technical content.
          </Text>
          <code
            style={{
              fontFamily: tokens.font.monospace,
              fontSize: "1rem",
              color: tokens.color.textDefault,
            }}
          >
            const greeting = "Hello, world!";
          </code>
        </Box>
      </Section>

      <Section
        title="Font Size Scale"
        description="A seven-step scale from 16px to 32px. Use fontSize tokens for precise control, or text style tokens for responsive presets."
      >
        <SizeScale />
      </Section>

      <Section
        title="Text Styles"
        description="Pre-configured responsive text styles that combine font size and line height. These automatically adjust between mobile and desktop breakpoints."
      >
        <TextStyles />
      </Section>

      <Section title="OpenType Features">
        <Box
          sx={{ p: "6" }}
          style={{
            backgroundColor: tokens.color.backgroundSecondary,
            borderRadius: "0.5rem",
            border: `1px solid ${tokens.color.borderMuted}`,
          }}
        >
          <Text
            size="small"
            style={{ marginBottom: "1.5rem", color: tokens.color.textMuted }}
          >
            The serif and sans fonts include OpenType features for improved
            typography.
          </Text>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            <div>
              <Text
                as="h4"
                font="sans"
                size="small"
                style={{ marginBottom: "0.75rem", fontWeight: 700 }}
              >
                Oldstyle Figures
              </Text>
              <Text
                style={{
                  fontSize: "1.5rem",
                  fontFeatureSettings: "'onum'",
                }}
              >
                0123456789
              </Text>
            </div>
            <div>
              <Text
                as="h4"
                font="sans"
                size="small"
                style={{ marginBottom: "0.75rem", fontWeight: 700 }}
              >
                Small Caps
              </Text>
              <Text
                style={{
                  fontSize: "1.5rem",
                  fontFeatureSettings: '"smcp", "c2sc"',
                }}
              >
                Small Caps Text
              </Text>
            </div>
            <div>
              <Text
                as="h4"
                font="sans"
                size="small"
                style={{ marginBottom: "0.75rem", fontWeight: 700 }}
              >
                Ligatures
              </Text>
              <Text
                style={{
                  fontSize: "1.5rem",
                  fontFeatureSettings: "'liga'",
                }}
              >
                fi fl ff ffi ffl
              </Text>
            </div>
          </Box>
        </Box>
      </Section>
    </Box>
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
