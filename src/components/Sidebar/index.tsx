import React, { useId } from "react";

const elementList = [
  { type: "text", label: "Text Field" },
  { type: "input", label: "Form Input" },
];

const Element = ({ type, label }: { type: string; label: string }) => {
  const id = useId();

  const onDragStart = (event: any, id: string, text: string) => {
    event.dataTransfer.setData("text/plain", JSON.stringify({ id, text }));
  };

  return (
    <div
      className="mt-4 bg-white p-2 rounded-md"
      draggable
      onDragStart={(e) => onDragStart(e, id, type)}
    >
      {label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="bg-slate-200 flex-none w-80 px-5 pt-5">
      <span className="text-lg">Drag elements to the right </span>

      {elementList?.map((item, ind) => (
        <Element key={ind} type={item?.type} label={item?.label} />
      ))}

      <div className="mt-8">
        <span>More elements can be added easily...</span>
      </div>
    </div>
  );
};

export default Sidebar;
