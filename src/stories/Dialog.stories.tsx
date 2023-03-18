import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dialog } from "../components/dialog";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;
export const CustomFooter = Template.bind({});
CustomFooter.args = {
  visible: true,
  footer: (
    <>
      <div>hello</div>
    </>
  ),
};
