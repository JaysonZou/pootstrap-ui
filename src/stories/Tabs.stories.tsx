import { Tabs } from "../lib/Tabs";

// Button.stories.js|ts|jsx|tsx

import React, { useState } from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Tabs",
  component: Tabs,
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const Primary = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState("Secondary");
  const [isPrimary, setIsPrimary] = useState(false);
  const testcase = [
    {
      title: "tokyo",
      content: "tokyo is hot",
    },
    {
      title: "Chicago",
      content: "Chicago has meachel jordan",
    },
    {
      title: "Beijing",
      content: "Beijing has Great Place!",
    },
  ];

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue("Primary");
    }
  };
  return <Tabs tabItems={testcase} />;
};
