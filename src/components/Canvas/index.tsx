import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { v4 as uuid } from "uuid";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Canvas = () => {
  const [items, setItems] = useState<any[]>([]);

  const onDrop = (layout: any, layoutItem: any, event: any) => {
    const { text } = JSON.parse(event?.dataTransfer?.getData("text/plain"));
    setItems((prevItems) => [...prevItems, { id: uuid(), type: text }]);
    console.log("dropped item ==> ", text);
  };

  return (
    <ResponsiveGridLayout
      // onLayoutChange={() => {}}
      onDrop={onDrop}
      // layouts={{ lg: layout }}
      className="layout"
      isDroppable
      style={{ minHeight: "100%" }}
    >
      {items?.map((item, ind) => {
        return (
          <div key={item?.id || ind} className="bg-purple-400">
            {item?.type}
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

export default Canvas;
