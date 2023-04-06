import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { v4 as uuid } from "uuid";
import useGrid from "../../hooks/useGrid";
import TextField, { TextInput } from "../RenderElements";

const ResponsiveGridLayout = WidthProvider(Responsive);

const ElementList = ({
  type,
  style,
  props,
}: {
  type: string;
  style: any;
  props: any;
}) => {
  switch (type) {
    case "text":
      return <TextField style={style} props={props} />;
    case "input":
      return <TextInput style={style} props={props} />;
    default:
      return <></>;
  }
};

const RenderElement = ({
  type,
  style,
  props,
}: {
  type: "text" | "input";
  style: any;
  props: any;
}) => {
  return <ElementList type={type} style={style} props={props} />;
};

const Canvas = () => {
  const [items, setItems] = useState<any[]>([]);
  const {
    numOfColumns,
    setNumOfColumns,
    setSelectedGrid,
    gridList,
    setGridList,
  } = useGrid();

  const onDrop = (layout: any, layoutItem: any, event: any) => {
    const { text } = JSON.parse(event?.dataTransfer?.getData("text/plain"));
    setGridList((prevItems: any[]) => [
      ...prevItems,
      { id: uuid(), type: text },
    ]);
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
        <button
          onClick={() => {
            setGridList([]);
            setSelectedGrid(null);
          }}
          className="ml-5 "
        >
          Clear Canvas
        </button>
      </div>
      <div className=" flex-1 ">
        <ResponsiveGridLayout
          rowHeight={40}
          onDrop={onDrop}
          // onLayoutChange={() => {}}
          breakpoints={{ lg: 1080 }}
          cols={{ lg: numOfColumns }}
          isDroppable
          style={{ minHeight: "100%" }}
        >
          {gridList?.map((item: any, ind: number) => {
            return (
              <div
                onClick={() => {
                  setSelectedGrid(item);
                }}
                key={item?.id || ind}
                // className="bg-gray-300 cursor-pointer"
                className=" cursor-pointer"
              >
                <RenderElement
                  type={item?.type}
                  style={item?.properties?.style || {}}
                  props={item?.properties?.props || {}}
                />
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Canvas;
