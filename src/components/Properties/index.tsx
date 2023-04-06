import React from "react";
import useGrid from "../../hooks/useGrid";

const propertiesList = [
  {
    label: "Background Color",
    key: "backgroundColor",
    for: ["text", "input"],
    type: "style",
  },
  {
    label: "Text Color",
    key: "color",
    for: ["text"],
    type: "style",
  },
  {
    label: "Text Value",
    key: "value",
    for: ["text"],
    type: "props",
  },
  {
    label: "Placeholder",
    key: "placeholder",
    for: ["input"],
    type: "props",
  },
];

const Properties = () => {
  const { gridList, selectedGrid, setGridList, setSelectedGrid } = useGrid();
  return (
    <div className="bg-slate-200 flex-none w-80 px-5 pt-5">
      <span className="text-lg">Click element to change its properties</span>

      {propertiesList?.map((item, ind) => {
        return (
          item?.for?.includes(selectedGrid?.type) && (
            <input
              onChange={(e) => {
                setGridList((list: any[]) => {
                  const newGrid = {
                    ...selectedGrid,
                    properties: {
                      ...selectedGrid?.properties,
                      [item?.type]: {
                        ...selectedGrid?.properties?.[item?.type],
                        [e?.target?.name]: e?.target?.value,
                      },
                    },
                  };

                  setSelectedGrid(newGrid);

                  return list?.map((gridItem: any) =>
                    gridItem?.id !== selectedGrid?.id ? gridItem : newGrid
                  );
                });
              }}
              value={selectedGrid?.properties?.[item?.type]?.[item?.key] || ""}
              name={item?.key}
              className="mt-4 bg-white p-2 rounded-md"
              placeholder={item?.label}
            />
          )
        );
      })}

      <div className="mt-8">
        <span>More properties can be added easily...</span>
      </div>

      {/* <pre className="mt-5">{JSON.stringify(gridList, null, 2)}</pre> */}
    </div>
  );
};

export default Properties;
