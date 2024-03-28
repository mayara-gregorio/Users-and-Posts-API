import { useState, useEffect } from "react"
import { ContainerPosts, ContainerProfile, ContainerUser, Img, Info } from "../../style"
import ComponentsPost from "../PostComponents/PostComponents"

type User = {
    id: string
    name: string
    biografy: string
    avatarUrl: string
}

export default function ComponentUser({id_user}: {id_user: string}){
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User | null>(null)

    useEffect(()=>{
        fetch('http://localhost:3000/users').then(data => data.json()).then(response => setUsers(response))
    }, [])

    useEffect(()=>{
        const user = users.find(user => user.id == id_user)
        if(user){
            setUser(user)
        }
    }, [id_user, users])


    return(
        <ContainerProfile>
            <ContainerUser>
                <Img src={user?.avatarUrl}/>
                    <Info>
                        <p>{user?.name}</p>
                        <p>{user?.biografy}</p>
                    </Info>
                
            </ContainerUser>
            <ContainerPosts>
                    <ComponentsPost id_user={id_user}/>
            </ContainerPosts>
        </ContainerProfile>
        

                
    )
}