import { createContext, useState } from "react";



export const FilterContext = createContext();

export const FilterProvider = ({children}) =>{

    const [filteredProducts, setFilteredProducts] = useState({
        inputValue: '',
        isTrusted: false
    });

    return (
        <FilterContext.Provider value={[filteredProducts, setFilteredProducts]}>
            {children}
        </FilterContext.Provider>
    )
}