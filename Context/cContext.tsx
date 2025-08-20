// UpgradeContext.tsx
// imports required library
import React, { createContext, useState, useContext, ReactNode, useEffect} from 'react';
import { useQ } from './qContext';

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
    setCols: (data: any) => void;
}

// creates UpgradeContext as a context using UpgradeContextProps
const CContext = createContext<CContextProps | undefined>(undefined);

// creates an interface: UpgradeProviderProps
interface CProviderProps {
    children: ReactNode;
}

// creates, and exports UpgradeProvider using UpgradeProviderProps
export const CProvider: React.FC<CProviderProps> = ({children}) => {
    const {addQ, removeQ, editPts} = useQ()
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
        setC((prevCol) => {
          const updated = [...prevCol, newCol];
          addQ();
        let x = 1;
        for (let i = 0; i <= (updated.length * 5); i++) {
          editPts(i, 100*x);
          if (i%updated.length == 0 && i != 0) {
            x += 1
          };
        };

          return updated;
        });
      };
    const editCol = (id: number, c: string) => {
      setC(prevItems => prevItems.map(item => item.id == id? {... item, c: c } : item)
      );
    };
    const removeCol = () => {
      setC((prevData) => {
        const updated = prevData.slice(0, -1);
      
        for (let i = 0; i < 5; i++) {
          removeQ();
        };
        let x = 1;
        for (let i = 0; i < (updated.length * 5); i++) {
          editPts(i, 100*x);
          if (i%updated.length == 0 && i != 0) {
            x += 1
          };
        };

        return updated
      });
    };

    const setCols = (data: any) => {
      setC(data)
    }


    // returns everything in QProvider
    return(
    <CContext.Provider value={{ columns, addCol, editCol, removeCol, setCols }}>
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
