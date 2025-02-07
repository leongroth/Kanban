import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            window.location.reload(false)
        }
        catch(err) {
            console.error(err)
        }
    }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 mt-[10px]">
        <h1 className="font-semibold text-black dark:text-white transition-all duration-500">LogIn</h1>
        <div className="w-[300px] flex flex-col items-center">
            <h2 className="text-gray-500 dark:text-gray-200 transition-all duration-500 w-full" >Email</h2>
            <input type="email" className="rounded-full w-full" onChange={(e) => setEmail(e.target.value)}/>
            <h2 className="text-gray-500 dark:text-gray-200 transition-all duration-500 w-full" >Password</h2>
            <input type="password" className="rounded-full w-full" onChange={(e) => setPassword(e.target.value)}/>
            <button className="w-[80px] h-[30px] rounded-full bg-[#C02BD4] text-white font-semibold my-[10px] drop-shadow-lg hover:bg-[#81298d]" onClick={signIn}>Sign In</button>
        </div>
    </div>
  )
}

export default LoginForm
