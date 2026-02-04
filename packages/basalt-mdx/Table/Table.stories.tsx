import type { Meta, StoryObj } from "@storybook/react"

import { Table } from "./Table"
import { TableHead } from "../TableHead/TableHead"
import { TableHeadCell } from "../TableHeadCell/TableHeadCell"
import { TableCell } from "../TableCell/TableCell"

const meta: Meta = {
  title: "Components/Table",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "styled table elements (`<table>`, `<thead>`, `<th>`, `<td>`), for use in MDX.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <tr>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
          </tr>
        </TableHead>
        <tbody>
          <tr>
            <TableCell>children</TableCell>
            <TableCell>ReactNode</TableCell>
            <TableCell>The content to render</TableCell>
          </tr>
          <tr>
            <TableCell>className</TableCell>
            <TableCell>string</TableCell>
            <TableCell>Additional CSS class names</TableCell>
          </tr>
        </tbody>
      </>
    ),
  },
}
