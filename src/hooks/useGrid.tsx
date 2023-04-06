import { createContext, ReactNode, useContext, useState } from "react";

const GridContext = createContext<any>(null);

export const GridProvider = ({ children }: { children: ReactNode }) => {
  const [numOfColumns, setNumOfColumns] = useState<number>(12);
  const [selectedGrid, setSelectedGrid] = useState<any>(null);
  const [gridList, setGridList] = useState<any[]>([]);

  return (
    <GridContext.Provider
      value={{
        numOfColumns,
        setNumOfColumns,
        selectedGrid,
        setSelectedGrid,
        gridList,
        setGridList,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

const useGrid = () => useContext(GridContext);

export default useGrid;
