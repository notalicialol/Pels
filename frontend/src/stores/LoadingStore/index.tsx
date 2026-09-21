import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface LoadingContextTypes {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextTypes | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const value = useMemo(() => ({ loading, setLoading }), [loading]);

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading(): LoadingContextTypes {
    const context = useContext(LoadingContext);
    
    if (!context) {
        throw new Error("there is no LoadingProvider");
    }

    return context;
}