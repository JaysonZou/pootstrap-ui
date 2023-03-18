import { Form } from "../components/form";

import React, { FormEvent, useState } from "react";

export default {
  title: "Form",
  component: Form,
};

export const Primary = () => {
  const [formData, setFormData] = useState({
    username: "hello",
    password: 123,
  });
  const handleFormDataChange = (data: any) => {
    setFormData(data);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(formData);
  };
  return (
    <Form
      value={formData}
      fields={[
        {
          name: "username",
          type: "input",
        },
        {
          name: "password",
          type: "input",
        },
      ]}
      onSubmit={onSubmit}
      buttons={<button>提交</button>}
      onChange={handleFormDataChange}
    />
  );
};
