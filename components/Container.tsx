import React from 'react';
import Head from "next/head";

const MainContainer = ({children, keywords, title = 'Next App'}) => {
    return (
        <>
            <Head>
                <meta name={"keywords"} content={"junior developer" + keywords}/>
                <meta name={"description"} content={"this is YouTube tutorial"}/>
                <meta charSet={"utf-8"}/>

                <title>{title} | Next </title>
            </Head>
            <nav className='navbar'>

            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`nav {
                  position: fixed;
                  height: 60px;
                  left: 0;
                  top: 0;
                  right: 0;
                  background: orange;
                  padding: 15px;
                }
                main {
                margin-top: 60px;
                }
                `}
            </style>
        </>
    );
};

export default MainContainer;