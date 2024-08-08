import React from 'react';
import '../index.css';
import Header from './header'
import Us from './Us';
import Top from './Top/Top';
import Faqs from './faqss';
import Footer from './footer'



export default function home(){
    return(
        <>
            <Header/>
            <Top/>
            <Us/>
            
            <Faqs/>
            <Footer/>
            

        </>
    )
}