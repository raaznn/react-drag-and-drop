import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { v4 as uuid } from "uuid";
import useGrid from "../../hooks/useGrid";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Canvas = () => {
  const [items, setItems] = useState<any[]>([]);
  const { numOfColumns, setNumOfColumns } = useGrid();

  const onDrop = (layout: any, layoutItem: any, event: any) => {
    const { text } = JSON.parse(event?.dataTransfer?.getData("text/plain"));
    setItems((prevItems) => [...prevItems, { id: uuid(), type: text }]);
    console.log("dropped item ==> ", text);
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-50 px-8">
      <div className="flex justify-end mt-2">
        <select
          onChange={(val) =>
            setNumOfColumns((oldVal: number) => val?.target?.value || oldVal)
          }
          className="bg-white"
        >
          <option value="">Number of columns </option>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={20}>20</option>
        </select>
        <button onClick={() => setItems([])} className="ml-5 ">
          Clear Canvas
        </button>
      </div>
      <div className=" flex-1 ">
        <ResponsiveGridLayout
          onDrop={onDrop}
          // onLayoutChange={() => {}}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: numOfColumns }}
          isDroppable
          style={{ minHeight: "100%" }}
        >
          {items?.map((item, ind) => {
            return (
              <div key={item?.id || ind} className="bg-gray-300 cursor-pointer">
                {item?.type}
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Canvas;
