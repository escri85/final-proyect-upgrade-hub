import { createContext, useState } from "react";



export const FilterContext = createContext();

export const FilterProvider = ({children}) =>{
    /* Objeto que cambie un true/false para decirle a SEARCH que muestre o no muestre */
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