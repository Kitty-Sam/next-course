import Link from 'next/link'
import MainContainer from "../components/MainContainer";
import Router from 'next/router'

const Users = ({users}) => {

const onLinkClick = () => {
    Router.push('/')
}
    return (
        <MainContainer keywords={'users'} title={"Users page"}>
            <h1> Users list </h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>)}
            </ul>
            <button onClick={onLinkClick}>Go back to home</button>
            <button onClick={()=>{Router.push('/')}}>Go back to home inline</button>

        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users},
    }
}