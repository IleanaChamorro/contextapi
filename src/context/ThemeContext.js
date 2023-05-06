import { useState } from "react";
import { createContext } from "react";

//declaración y creación de contexto
const ThemeContext = createContext();


const initialTheme = "light";

//internamente tiene un wrapper(proveedor de elementos) y consumer(consumir valores)

//Proveedor
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        console.log(e.target.value);
        if(e.target.value === "light"){
            setTheme("light");
        }else{
            setTheme("dark");
        }
    };

    //agregado de valores para funcionalidad
    const data = {theme, handleTheme};

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
};

export { ThemeProvider }
export default ThemeContext;