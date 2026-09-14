import { createContext, useContext, type ReactNode } from 'react';

interface ListContextType {
    items: string[];
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export function ListProvider({ children, items }: { children: ReactNode; items: string[] }) {
    return (
        <ListContext.Provider value={{ items }}>
            {children}
        </ListContext.Provider>
    );
}

export function useListContext() {
    const context = useContext(ListContext);
    if (!context) {
        throw new Error('useListContext must be used within a ListProvider');
    }
    return context;
}