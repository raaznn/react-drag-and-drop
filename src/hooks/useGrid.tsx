import { createContext, ReactNode, useContext, useState } from "react";

const GridContext = createContext<any>(null);

export const GridProvider = ({ children }: { children: ReactNode }) => {
  const [numOfColumns, setNumOfColumns] = useState<number>(12);

  return (
    <GridContext.Provider value={{ numOfColumns, setNumOfColumns }}>
      {children}
    </GridContext.Provider>
  );
};

const useGrid = () => useContext(GridContext);

export default useGrid;
