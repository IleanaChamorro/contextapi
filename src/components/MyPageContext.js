import React from 'react'
import HeaderContext from './Header'
import MainContext from './Main'
import FooterContext from './Footer'
import { useState } from 'react'

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;

const translations = {
    es: {
        headerTitle: "Mi aplicacion CON Context",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@",
        mainHello: "Hola Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pié de página"
    },
    en: {
        headerTitle: "My application with Context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello User",
        mainContent: "My main content",
        footerTitle: "My footer",
    },
};

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);
    const [auth, setAuth] = useState(initialAuth);


    const handleTheme = (e) => {
        console.log(e.target.value);
        if(e.target.value === "light"){
            setTheme("light");
        }else{
            setTheme("dark");
        }
    };

    const handleLanguage = (e) => {
        console.log(e.target.value);

        if(e.target.value === "es"){
            setLanguage("es");
            setTexts(translations.es);
        }else{
            setLanguage("en");
            setTexts(translations.en);
        };
    };

    const handleAuth = (e) => {
        if(auth){
            setAuth(null);
        }else{
            setAuth(true);
        }
    };

    return (
        <div className='my-page'>
            <HeaderContext theme={theme} 
            handleTheme={handleTheme} 
            texts={texts} 
            handleLanguage={handleLanguage}
            auth={auth}
            handleAuth={handleAuth}
            />
            <MainContext theme={theme} texts={texts} auth={auth}/>
            <FooterContext texts={texts}/>
        </div>
  )
}

export default MyPage