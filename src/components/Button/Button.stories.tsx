import { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const PrimaryBtn: Story = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
}

// export const PrimaryBtn2: Story = {
//   args: {
//     ...PrimaryBtn.args,
//     children: "Primary2 button",
//   }
// }

export const SecondaryBtn: Story = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
}

export const OutlinedBtn: Story = {
  args: {
    variant: "outlined",
    children: "Outlined button",
  },
}

export const ButtonAsLink: Story = {
  args: {
    variant: "primary",
    asChild: true,
    children: <a href="https://it-incubator.io/">it-incubator</a>,
  },
}
