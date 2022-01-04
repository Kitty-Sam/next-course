import Link from 'next/link'
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
        <>
            <MainContainer keywords={'react'}>

                {/*   <Link href="/"><a className='link'> Главная</a></Link>
                <Link href="/users"><a className='link'> Пользователи</a></Link>*/}

                <h1>Главная страница</h1>


            </MainContainer>
        </>
    );
};

export default Index;