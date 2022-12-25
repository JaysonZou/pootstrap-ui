import { useState } from "react";
import "../../styles/tailwind.css";

export interface AccordionProps {
  data: AccordionItem[];
}

interface AccordionItem {
  name: string;
  content: string;
  isActive?: boolean;
}
export const Accordion = (props: AccordionProps) => {
  const { data } = props;
  const [source, setSource] = useState(
    data.map((item) => {
      return { ...item, isActive: false };
    })
  );

  const handleItemClick = (index: number) => {
    const newSource = source.map((item, i) => {
      return index === i ? { ...item, isActive: !item.isActive } : item;
    });
    setSource(newSource);
  };
  return (
    <div className="rounded-lg border">
      {source.map((item, index) => {
        return (
          <div key={item.name + index} className="m-0">
            <div
              onClick={() => handleItemClick(index)}
              className="p-2 border-b last: border-collapse"
            >
              {item.name}
            </div>
            {item.isActive ? <div className="p-2">{item.content}</div> : <></>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
