import {useEffect, useState} from "react";
import MainContainer from "../components/MainContainer";
import Link from "next/link"
import {MyPost} from "../interfaces/posts";
import {NextPageContext} from "next";

interface PostPageProps {
    posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostPageProps) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch("http://localhost:4200/posts")
            const postsData = await response.json()
            setPosts(postsData)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return (
        <MainContainer keywords={'posts'}>
            <p>Loading...</p>
        </MainContainer>
        )
    }
    return (
        <MainContainer keywords={'posts'} title={"posts page"}>
            <h1> Posts list</h1>
            {/*<pre>
              {JSON.stringify(posts, null, 2)}
          </pre>*/}
            <ol>
                {posts.map(post =>
                    <li key={post.id}>
                        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}><a>{post.title}</a></Link>
                    </li>)}
            </ol>

        </MainContainer>
    );
};


Posts.getInitialProps = async ({req}: NextPageContext) => {

    if (!req) {
        return { posts: null }
    }
    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await response.json()
    return {
        posts
    }
}
