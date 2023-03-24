import React from "react";

var data : any = {
    "" : [],
    "cd":[]
}

export const TableDataContext = React.createContext(data);

export function TableDataContextProvider(props: any) {
  return (
    <TableDataContext.Provider value={{}}>
      {props.children}
    </TableDataContext.Provider>
  );
}

//export const useTableDataContext = () => React.useContext(TableDataContext);
