// UpgradeContext.tsx
// imports required library
import React, { createContext, useState, useContext, ReactNode, useEffect} from 'react';
import { useC } from './cContext';

let temp = 5
// creates an interface: Upgrades
interface Question {
    id: number;
    q: string;
    a: string;
    points: number;
    used: boolean;
}
// creates an interface: UpgradeContextProps
interface QContextProps {
    questions: Question[];
    addQ: () => void;
    removeQ: () => void;
    editQ: (id: number, q: string) => void;
    editA: (id: number, a: string) => void;
}

// creates UpgradeContext as a context using UpgradeContextProps
const QContext = createContext<QContextProps | undefined>(undefined);

// creates an interface: UpgradeProviderProps
interface QProviderProps {
    children: ReactNode;
}

// creates, and exports UpgradeProvider using UpgradeProviderProps
export const QProvider: React.FC<QProviderProps> = ({children}) => {
  const { columns } = useC();
    // creates upgrades and setUpgrade
    const [questions, setQ] = useState<Question[]>([{id: 1, q: "Question 1", a: 'a1', points: 100, used:false},
      {id: 2, q: "Question 2", a: 'a2', points: 100, used:false},
      {id: 3, q: "Question 3", a: 'a3', points: 100, used:false},
      {id: 4, q: "Question 4", a: 'a4', points: 100, used:false},
      {id: 5, q: "Question 5", a: 'a5', points: 100, used:false},
      {id: 6, q: "Question 6", a: 'a1', points: 200, used:false},
      {id: 7, q: "Question 7", a: 'a2', points: 200, used:false},
      {id: 8, q: "Question 8", a: 'a3', points: 200, used:false},
      {id: 9, q: "Question 9", a: 'a4', points: 200, used:false},
      {id: 10, q: "Question 10", a: 'a5', points: 200, used:false},
      {id: 11, q: "Question 11", a: 'a1', points: 300, used:false},
      {id: 12, q: "Question 12", a: 'a2', points: 300, used:false},
      {id: 13, q: "Question 13", a: 'a3', points: 300, used:false},
      {id: 14, q: "Question 14", a: 'a4', points: 300, used:false},
      {id: 15, q: "Question 15", a: 'a5', points: 300, used:false},
      {id: 16, q: "Question 16", a: 'a1', points: 400, used:false},
      {id: 17, q: "Question 17", a: 'a2', points: 400, used:false},
      {id: 18, q: "Question 18", a: 'a3', points: 400, used:false},
      {id: 19, q: "Question 19", a: 'a4', points: 400, used:false},
      {id: 20, q: "Question 20", a: 'a5', points: 400, used:false},
      {id: 21, q: "Question 21", a: 'a1', points: 500, used:false},
      {id: 22, q: "Question 22", a: 'a2', points: 500, used:false},
      {id: 23, q: "Question 23", a: 'a3', points: 500, used:false},
      {id: 24, q: "Question 24", a: 'a4', points: 500, used:false},
      {id: 25, q: "Question 25", a: 'a5', points: 500, used:false},]);

      const addQ = () => {
        const newQ: Question = {
          id: questions.length + 1,
          q: `question ${questions.length + 1}`,
          a: 'n/a',
          points: (10),
          used: false
        }
        setQ((prevQ) => [...prevQ, newQ])
      }
      const editQ = (id: number, q: string) => {
        setQ(prevQ => prevQ.map(item => item.id == id? {... item, q: q, used: false } : item)
        )
      };
      const editA = (id: number, a: string) => {
        setQ(prevQ => prevQ.map(item => item.id == id? {... item, a: a } : item)
        )
      };
      const editPts = (id: number, p: number) => {
        setQ(prevQ => prevQ.map(item => item.id == id? {... item, p: p } : item)
        )
      };
    const removeQ = () => {
      setQ((prevData) => prevData.filter(item => item.id !== questions.length))
    };
    // if (questions.length/5 < columns.length) {
    //   for (let i = 0; i <(columns.length - (questions.length/5)); i++) {
    //     addQ()
    //   }
    // } else if (questions.length/5 > columns.length) {
    //   for (let i = 0; i <((questions.length/5)-columns.length); i++) {
    //     removeQ()
    //   }
    // }
      // questions.forEach((item) => {
      //   item.points = questions.length%columns.length*100

    // returns everything in QProvider
    return(
        <QContext.Provider value={{ questions, addQ, editQ, removeQ, editA }}>
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
