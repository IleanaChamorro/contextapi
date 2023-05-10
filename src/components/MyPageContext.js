import React from 'react'
import HeaderContext from './Header'
import MainContext from './Main'
import FooterContext from './Footer'
import { useState } from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'

const initialAuth = null;

const MyPage = () => {
    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (e) => {
        if(auth){
            setAuth(null);
        }else{
            setAuth(true);
        }
    };

    return (
        <div className='my-page'>
            <ThemeProvider>
            <LanguageProvider>
            <HeaderContext
            auth={auth}
            handleAuth={handleAuth}
            />
            <MainContext auth={auth}/>
            <FooterContext/>
            </LanguageProvider>
            </ThemeProvider>
        </div>
  )
}

export default MyPage