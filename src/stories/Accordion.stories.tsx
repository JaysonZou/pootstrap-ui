import { Accordion } from "../components/accordion";

export default {
  title: "Accordion",
  component: Accordion,
};

export const Example = () => {
  const data = [
    {
      name: "chapter1",
      content:
        "abcdeThis is the third item's accordion body. It is hidden by default, until the collapse plugin addfg",
    },
    {
      name: "chapter2",
      content:
        "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      name: "chapter3",
      content:
        "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ];

  return <Accordion data={data} />;
};
