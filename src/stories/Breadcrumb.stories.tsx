import { Breadcrumb, BreadcrumbItem } from "../components/breadcrumb";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

export const Example: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Section 1</BreadcrumbItem>
      <BreadcrumbItem>Section 2</BreadcrumbItem>
      <BreadcrumbItem>Section 3</BreadcrumbItem>
    </Breadcrumb>
  );
};
