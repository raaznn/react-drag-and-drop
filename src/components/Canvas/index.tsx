import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Canvas = () => {
  const [items, setItems] = useState([]);

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 },
  ];

  const handleDrop = (layout: any, layoutItem: any, event: any) => {
    console.log(layout, layoutItem, event);
  };

  return (
    <ResponsiveGridLayout
      // onLayoutChange={(e) => onsole.log(e)}
      onDrop={handleDrop}
      layouts={{ lg: layout }}
      className="layout"
      isDroppable
    >
      <div key="a" className="bg-blue-500"></div>
      <div key="b" className="bg-red-500"></div>
      <div key="c" className="bg-green-500"></div>
    </ResponsiveGridLayout>
  );
};

export default Canvas;
