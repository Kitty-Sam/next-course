import MainContainer from "../components/MainContainer";

export default function Index({title}) {
    return (
        <>
            <MainContainer keywords={'react'} title={"Main page"}>
                <h1>Main page</h1>
                <h2>{title}</h2>
            </MainContainer>
        </>
    );
};

Index.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/homePage')
    const data = await response.json()

    return {

        title: data.title
    }

}