// UpgradeContext.tsx
// imports required library
import React, { createContext, useState, useContext, ReactNode, useEffect} from 'react';

// creates an interface: Upgrades
interface Question {
    id: number;
    q: string;
    points: number;
    used: boolean;
}
// creates an interface: UpgradeContextProps
interface QContextProps {
    questions: Question[];
    // addUpgrade: (id: number, upgrade: string, level: number) => void;
    // editUpgrade: (id: number, upgrade:string, level: number) => void;
}

// creates UpgradeContext as a context using UpgradeContextProps
const QContext = createContext<QContextProps | undefined>(undefined);

// creates an interface: UpgradeProviderProps
interface QProviderProps {
    children: ReactNode;
}

// creates, and exports UpgradeProvider using UpgradeProviderProps
export const QProvider: React.FC<QProviderProps> = ({children}) => {
    // creates upgrades and setUpgrade
    const [questions, setQ] = useState<Question[]>([// predefined upgrades
      {id: 1, q: "Question 1", points: 100, used:false},
      {id: 2, q: "Question 2", points: 100, used:false},
      {id: 3, q: "Question 3", points: 100, used:false},
      {id: 4, q: "Question 4", points: 100, used:false},
      {id: 5, q: "Question 5", points: 100, used:false},
      {id: 6, q: "Question 1", points: 200, used:false},
      {id: 7, q: "Question 2", points: 200, used:false},
      {id: 8, q: "Question 3", points: 200, used:false},
      {id: 9, q: "Question 4", points: 200, used:false},
      {id: 10, q: "Question 5", points: 200, used:false},
      {id: 11, q: "Question 1", points: 300, used:false},
      {id: 12, q: "Question 2", points: 300, used:false},
      {id: 13, q: "Question 3", points: 300, used:false},
      {id: 14, q: "Question 4", points: 300, used:false},
      {id: 15, q: "Question 5", points: 300, used:false},
      {id: 16, q: "Question 1", points: 400, used:false},
      {id: 17, q: "Question 2", points: 400, used:false},
      {id: 18, q: "Question 3", points: 400, used:false},
      {id: 19, q: "Question 4", points: 400, used:false},
      {id: 20, q: "Question 5", points: 400, used:false},
      {id: 21, q: "Question 1", points: 500, used:false},
      {id: 22, q: "Question 2", points: 500, used:false},
      {id: 23, q: "Question 3", points: 500, used:false},
      {id: 24, q: "Question 4", points: 500, used:false},
      {id: 25, q: "Question 5", points: 500, used:false},]);


    // returns everything in QProvider
    return(
        <QContext.Provider value={{ questions }}>
      {children}
    </QContext.Provider>
    )
}

// creates, and exports useUpgrade using UpgradeContextProps
export const useQ = (): QContextProps => {
  // sets context as a context, using UpgradeContext
  const context = useContext(QContext);
  if (context === undefined) {// if context is undefined
    // creates error
    throw new Error('useQ must be used within an QProvider');
  }
  return context;// returns context
};
