import { Button } from "../components/button/Button";

import React, { useState } from "react";

export default {
  title: "Button",
  component: Button,
};

export const Normal = () => {
  // Sets the hooks for both the label and primary props
  const [disabled, setDisabled] = useState(true);
  const value = "按钮";

  const handleOnChange = () => {
    console.log(123);
  };

  // Sets a click handler to change the label's value
  return <Button onClick={handleOnChange} label={value} />;
};
