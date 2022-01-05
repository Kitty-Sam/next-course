import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";
import Link from 'next/link'
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/posts";

interface PostPageProps {
    post: MyPost
}

export default function Post({post: serverPost}: PostPageProps) {
    const router = useRouter()

    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`)
            const dataPost = await response.json()
            setPost(dataPost)
        }

        if (!serverPost) {
            load()
        }

    }, [])

    if (!post) {
        return (
            <MainContainer keywords={'loading'}>
                <p>Loading...</p>
            </MainContainer>
        )
    }

    return (
        <MainContainer  keywords={"post"} title={"Post page"}>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            {/*  <h1>Post page {router.query.id}</h1>*/}
            <Link href={"/posts"}><a>Back to all posts</a></Link>
        </MainContainer>

    )
};

/*Post.getInitialProps = async ({query, req}) => {
    if (!req){
     return   {post: null}
    }
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await response.json()
    return {
        post
    }

}*/


interface  PostNextPAgeContext extends NextPageContext {
    query: {
        id: string
    }
}

// export async function getServerSideProps(context){
export async function getServerSideProps({query, req}: PostNextPAgeContext) {
    if (!req) {
        return {post: null}
    }
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post: MyPost = await response.json()
    return {
        props: post
    }
}
