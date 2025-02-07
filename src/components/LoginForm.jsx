import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert(email + " is signed in")
        }
        catch(err) {
            console.error(err)
        }
    }

  return (
    <div className="w-full h-[80%] flex flex-col justify-center items-center">
        <h1 className="font-semibold text-black dark:text-white transition-all duration-500">LogIn</h1>
        <div className="w-[300px]">
            <h2 className="text-gray-500 dark:text-gray-200 transition-all duration-500" >Email</h2>
            <input type="email" className="rounded-full w-full" onChange={(e) => setEmail(e.target.value)}/>
            <h2 className="text-gray-500 dark:text-gray-200 transition-all duration-500" >Password</h2>
            <input type="password" className="rounded-full w-full" onChange={(e) => setPassword(e.target.value)}/>
            <button className="w-[60px] h-[30px] rounded-full bg-[#C02BD4] text-white font-semibold" onClick={signIn}>Sign In</button>
        </div>
    </div>
  )
}

export default LoginForm
