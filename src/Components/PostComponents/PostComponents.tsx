import { useEffect, useState } from "react"
import {  ContainerPosts, ContainerPost, Title, Text } from "../../style"


type Post = {
    id: string
    title: string,
    description: string,
    id_user: string
}

export default function ComponentsPost({id_user}: {id_user: string}){
    const [posts, setPosts] = useState<Post[]>([])
    const [postsUser, setPostsUser] = useState<Post[]>([])

    useEffect(()=>{
        fetch("http://localhost:3000/posts").then(data => data.json()).then(response => setPosts(response))
    }, [])

    useEffect(()=>{
        const postUser = posts.filter(post => post.id_user === id_user)
        setPostsUser(postUser)
    }, [id_user, posts])

    return(
        <ContainerPosts>
            {postsUser.map(post => (
                <ContainerPost>
                    <Title>{post?.title}</Title>
                    <Text>{post?.description}</Text>
                </ContainerPost>
            ))}
        </ContainerPosts>
    )
}