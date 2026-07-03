import { createContext, useState } from "react";

export const Codecontext = createContext();

export const Codecontextprovider = ({ children }) => {
    const [analysis, setanalysis] = useState(null);

    return (
        <Codecontext.Provider value={{ analysis, setanalysis }}>
            {children}
        </Codecontext.Provider>
    );
};