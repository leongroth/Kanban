import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className="w-full h-[80%] flex flex-col justify-center items-center">
        <h1 className="font-semibold text-black dark:text-white transition-all duration-500">LogIn</h1>
        <div className="w-[300px]">
            <h2 className="text-gray-500 dark:text-gray-200 transition-all duration-500" onChange={() => setEmail(target.value)}>Email</h2>
            <input type="email" className="rounded-full w-full" />
            <h2 className="text-gray-500 dark:text-gray-200 transition-all duration-500" onChange={() => setPassword(target.value)}>Password</h2>
            <input type="password" className="rounded-full w-full"/>
            <h2>{email}</h2>
            <h2>{password}</h2>
        </div>
    </div>
  )
}

export default LoginForm
