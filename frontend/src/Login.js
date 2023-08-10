import {useState} from 'react'

export default function Login(){
    const [username ,setUsername] = useState("")
    const [password,setPassword] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            username : username,
            password : password
        }
        console.log(formData)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    username : <input type = "text" value = {username} placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                </label>
                <label>
                    password : <input type = "password" value = {password} placeholder ='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </label>
                <button type = "submit">login</button>
            </form>
        </div>
    )
}