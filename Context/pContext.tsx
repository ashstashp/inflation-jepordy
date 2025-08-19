// UpgradeContext.tsx
// imports required library
import React, { createContext, useState, useContext, ReactNode, useEffect} from 'react';
import { useC } from './cContext';
import { useQ } from './qContext';

// creates an interface: Upgrades
interface Preset {
    id: number;
    p: string;
}
// creates an interface: UpgradeContextProps
interface PContextProps {
    presets: Preset[];
    addP: () => void;
    removeP: (id: number) => void;
    editP: (id: number, p: string) => void;
    loadP: (id: number) => void;
}

// creates UpgradeContext as a context using UpgradeContextProps
const PContext = createContext<PContextProps | undefined>(undefined);

// creates an interface: UpgradeProviderProps
interface PProviderProps {
    children: ReactNode;
}

// creates, and exports UpgradeProvider using UpgradeProviderProps
export const PProvider: React.FC<PProviderProps> = ({children}) => {
  const { questions, editQ, editA } = useQ();
  const { columns, editCol } = useC();
    // creates upgrades and setUpgrade
    const [presets, setP] = useState<Preset[]>([// predefined upgrades
      {id: 1, p: "Inflation Jepordy"},
      {id: 2, p: "preset 2"},
      {id: 3, p: "preset 3"},
      {id: 4, p: "preset 4"},
      {id: 5, p: "preset 5"},]);

    const addP = () => {
        const newP: Preset = {
          id: presets.length + 1,
          p: `preset ${presets.length + 1}`
        }
        setP((prevP) => [...prevP, newP])
      }
    const editP = (id: number, p: string) => {
      presets.forEach(item => {
        if (item.id == id) {
          item.p = p
        }
      })
    };
    const removeP = (id: number) => {
      setP((prevData) => prevData.filter(item => item.id !== id))
    };

    const loadP = (id: number) => {
      if (id == 1) {
        // questions.forEach(item => {
        //   editQ(item.id, `TestQ ${item.id}`)
        //   editA(item.id, `TestA ${item.id}`)
        // })
        // columns.forEach(item => {
        //   editCol(item.id, `TestC ${item.id}`)
        // })

        editQ(1, 'What is Inflation?')
        editQ(6, 'How many steps are in a Wage/Price Spiral?')
        editQ(11, 'What is Demand-Pull inflation?')
        editQ(16, 'How many types of inflation are there?')
        editQ(21, 'What is Cost-Push inflation?')
        editQ(2, 'What is a Household?')
        editQ(7, 'How many steps are in the factor market diagram (without government)?')
        editQ(12, 'What is a Factor Market?')
        editQ(17, 'What is the Product Market?')
        editQ(22, 'What is the purpose of a Circular Flow Model?')
        editQ(3, 'What are the three types of GDP?')
        editQ(8, 'What are the three Economic Indicators?')
        editQ(13, 'What are some limitations of a GDP?')
        editQ(18, 'How many ways can GDP growth help people?')
        editQ(23, 'What is a GDP (Gross Domestic Product)?')
        editQ(4, 'What is Inflation Rate?')
        editQ(9, 'What does the Price Index do? ')
        editQ(14, 'Why is Hyperinflation so dangerous?')
        editQ(19, 'What is the difference between Nominal Wages/Costs of Living, compared to their Real counterparts?')
        editQ(24, 'What is CPI?')
        editQ(5, 'What was the inflation rate on cars, in Metro Detroit, Michigan, from 1966 to 2024?')
        editQ(10, 'What (according to the Wage/Price Spiral diagram) causes a general price rise (aka inflation)?')
        editQ(15, 'How many years did it take for the average housing price to increase, in Michigan, by $855?')
        editQ(20, 'What was the average cost of living, per household, in Michigan, December of 2024?')
        editQ(25, 'What is the Equilibrium Inflation Rate?')

        editA(1, 'The rate of increase in prices over a given period of time.')
        editA(6, '5')
        editA(11, 'When demand for goods increases and exceeds production capacity.')
        editA(16, '11')
        editA(21, 'When production costs rise and the producers pass the increase on to consumers.')
        editA(2, 'A person or group of people living together')
        editA(7, '4')
        editA(12, 'Where households sell their land, labor, and capital to firms.')
        editA(17, 'Where goods and/or services are sold by firms, and purchased by a household.')
        editA(22, 'It illustrates how money, goods, and services flows between households and businesses in a market economy.')
        editA(3, 'Nominal, Real, and Real per Capita.')
        editA(8, 'GDP, Market Value, and the Final Good.')
        editA(13, 'Leaves out unpaid/volunteer work, it ignores informal/illegal exchanges and it ignores an Informal Economy.')
        editA(18, '6')
        editA(23, 'The market value of all final goods and services produced, within a country, in a specific time frame.')
        editA(4, 'The percent increase in the overall cost of goods and services, from one month, or year, to another.')
        editA(9, 'It measures the change in price of a type of good, overtime.')
        editA(14, 'It\'s unpredictable and has extreme price jumps.')
        editA(19, 'Nominal uses current prices, while Real is adjusted for inflation.')
        editA(24, 'The price index for a \“market basket\” of consumer goods/services')
        editA(5, '3.0%')
        editA(10, 'Higher labor costs that are passed onto consumers.')
        editA(15, '4 Years')
        editA(20, '$1,036 per month')
        editA(25, 'When the real inflation rate equals the expected inflation rate.')

        editCol(1, 'Inflation')
        editCol(2, 'Circular Flow')
        editCol(3, 'GDP')
        editCol(4, 'Inflation:\nExpanded')
        editCol(5, 'Extras')
      }
    }


    // returns everything in QProvider
    return(
    <PContext.Provider value={{ presets, addP, editP, removeP, loadP }}>
      {children}
    </PContext.Provider>
    )
}

// creates, and exports useUpgrade using UpgradeContextProps
export const useP = (): PContextProps => {
  // sets context as a context, using UpgradeContext
  const context = useContext(PContext);
  if (context === undefined) {// if context is undefined
    // creates error
    throw new Error('useP must be used within an PProvider');
  }
  return context;// returns context
};
