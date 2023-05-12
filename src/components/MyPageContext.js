import React from 'react'
import HeaderContext from './Header'
import MainContext from './Main'
import FooterContext from './Footer'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'
import { AuthProvider } from '../context/AuthContext'



const MyPage = () => {
   
    return (
        <div className='my-page'>
            <AuthProvider>
                <ThemeProvider>
                    <LanguageProvider>
                        <HeaderContext />
                        <MainContext/>
                        <FooterContext/>
                    </LanguageProvider>
                </ThemeProvider>
            </AuthProvider>
        </div>
  )
}

export default MyPage