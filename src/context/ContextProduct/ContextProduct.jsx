import React from 'react';


const Products = React.createContext();

export function ProductsProvider ({children}) {


    return (
        <Products.Provider value={}>
            {children}
        </Products.Provider>
    )
};

export default Products