import { useState } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

const Logout = () => {

    const [user, setUser] = useState("Not signed in")

    onAuthStateChanged(auth, (user) => {
        if(user){
          setUser(user.email)
        }
      })

    const Logout = () => {
        signOut(auth)
        window.location.reload(false)
    }

  return (
    <div className="flex flex-col items-center">
        <h1 className="font-semibold text-center text-black dark:text-white transition-all duration-500">{user}</h1>
        <button className="w-[80px] h-[30px] rounded-full bg-[#C02BD4] text-white font-semibold my-[10px] drop-shadow-lg hover:bg-[#81298d]" onClick={Logout}>Log Out</button>
    </div>
  )
}

export default Logout
