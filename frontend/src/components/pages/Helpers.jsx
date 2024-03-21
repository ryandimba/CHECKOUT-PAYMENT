import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

//This block of code stores the logged in user's token to the session storage
export const storedUser=(response) =>{
    sessionStorage.setItem('user', JSON.stringify({
        userName: response.data.user_profile_data.username,
        phoneNumber: response.data.user_profile_data.phone,
        token: response.data.token
    }))
}

export const userData = ()=>{
    const stringified = sessionStorage.getItem('user') || '""'
    return JSON.parse(stringified || {})
}

export const Protector = ({Component}) =>{
    const navigate = useNavigate()

    const {token} = userData()

    useEffect(() => {
      
    
    if(!token){
        navigate("/login")
    }
    }, [navigate, token])

    return <Component></Component>
    
}