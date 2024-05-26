import { ReactElement, ReactNode, createContext, useState } from "react";

interface DashboardActiveTabContextType {
    activeTab: string;
    setActiveTab: (prop: string) => void;
}

export const DashboardActiveTabContext = createContext<DashboardActiveTabContextType>({activeTab: 'gyminfo', setActiveTab: () => {}});

export const DashboardActiveTabProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState('gyminfo');

    return (
        <DashboardActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </DashboardActiveTabContext.Provider>
    );

}