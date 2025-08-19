// UpgradeContext.tsx
// imports required library
import React, { createContext, useState, useContext, ReactNode, useEffect} from 'react';

// creates an interface: Upgrades
interface Column {
    id: number;
    c: string;
}
// creates an interface: UpgradeContextProps
interface CContextProps {
    columns: Column[];
    addCol: () => void;
    removeCol: () => void;
    editCol: (id: number, c: string) => void;
}

// creates UpgradeContext as a context using UpgradeContextProps
const CContext = createContext<CContextProps | undefined>(undefined);

// creates an interface: UpgradeProviderProps
interface CProviderProps {
    children: ReactNode;
}

// creates, and exports UpgradeProvider using UpgradeProviderProps
export const CProvider: React.FC<CProviderProps> = ({children}) => {
    // creates upgrades and setUpgrade
    const [columns, setC] = useState<Column[]>([// predefined upgrades
      {id: 1, c: "col1"},
      {id: 2, c: "col2"},
      {id: 3, c: "col3"},
      {id: 4, c: "col4"},
      {id: 5, c: "col5"},
    ]);

    const addCol = () => {
        const newCol: Column = {
          id: columns.length + 1,
          c: `col ${columns.length + 1}`
        }
        setC((prevCol) => [...prevCol, newCol])
      }
    const editCol = (id: number, c: string) => {
      setC(prevItems => prevItems.map(item => item.id == id? {... item, c: c } : item)
      )
    };
    const removeCol = () => {
      setC((prevData) => prevData.filter(item => item.id !== columns.length))
    };


    // returns everything in QProvider
    return(
    <CContext.Provider value={{ columns, addCol, editCol, removeCol }}>
      {children}
    </CContext.Provider>
    )
}

// creates, and exports useUpgrade using UpgradeContextProps
export const useC = (): CContextProps => {
  // sets context as a context, using UpgradeContext
  const context = useContext(CContext);
  if (context === undefined) {// if context is undefined
    // creates error
    throw new Error('useC must be used within an CProvider');
  }
  return context;// returns context
};
