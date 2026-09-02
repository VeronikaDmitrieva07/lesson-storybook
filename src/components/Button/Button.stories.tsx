import { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

/** Primary variant. Used as 'default'*/
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

/** Secondary variant*/
export const SecondaryBtn: Story = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
}

/** Outlined variant*/
export const OutlinedBtn: Story = {
  args: {
    variant: "outlined",
    children: "Outlined button",
  },
}

/** Link as Button variant*/
export const ButtonAsLink: Story = {
  args: {
    variant: "primary",
    asChild: true,
    children: <a href="https://it-incubator.io/">it-incubator</a>,
  },
}
