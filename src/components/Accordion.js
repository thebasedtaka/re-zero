import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>
    );

    return (
      <div key={items.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => {
            if (expandedIndex === index) return setExpandedIndex(-1);
            setExpandedIndex(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div key={items.id} className="border-x border-t rounded">
      {renderedItems}
    </div>
  );
}
export default Accordion;
