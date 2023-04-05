import React, { useId } from "react";

const elementList = [{ type: "text" }, { type: "input" }];

const Element = ({ type }: { type: string }) => {
  const id = useId();

  const onDragStart = (event: any, id: string, text: string) => {
    event.dataTransfer.setData("text/plain", JSON.stringify({ id, text }));
  };

  return (
    <h1 className="" draggable onDragStart={(e) => onDragStart(e, id, type)}>
      {type}
    </h1>
  );
};

const Sidebar = () => {
  return (
    <div>
      {elementList?.map((item, ind) => (
        <Element key={ind} type={item.type} />
      ))}
    </div>
  );
};

export default Sidebar;
