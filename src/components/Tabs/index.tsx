import { ReactNode, useState } from "react";

interface TabItem {
  title: string;
  content: ReactNode[] | string;
}

interface TabProps {
  tabItems: TabItem[];
}

export const Tabs: React.FC<TabProps> = ({ tabItems }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="tab">
        {tabItems.map((item, index) => {
          return (
            <button
              key={item.title + index}
              className="tablinks"
              onClick={() => setSelected(index)}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {tabItems.map((item, index) => {
        return (
          <div
            className={`tabcontent ${selected === index ? "active" : ""}`}
            key={item.title}
          >
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
};
