import { Popover } from "@base-ui-components/react"
import DarmodeSwitch from "./DarmodeSwitch"
import LoginForm from "./LoginForm"
import { useState } from "react"
import UserIcon from "../assets/UserIcon"
import Logout from "./Logout"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"
import LeonPic from '../assets/LeonPic.png'
import FrostPic from '../assets/FrostPic.png'
import SasPic from '../assets/SasPic.png'





const UserButton = () => {
    const [icon, setIcon] = useState(<UserIcon />)

    const users = ["leongroth@gmail.com", "frost@gmail.com", "sas@gmail.com"]
    const profilePics = [LeonPic, FrostPic, SasPic]

    onAuthStateChanged(auth, (user) => {
        if(user){
            const index = users.indexOf(user.email)
            setIcon(<img src={profilePics[index]} />)
        } else {
            setIcon(<UserIcon />)
        }
      })

  return (
    <div className="absolute left-[5%]">
        <Popover.Root>
            <Popover.Trigger className="bg-[#EFEFEF] dark:bg-[#484455] drop-shadow-lg rounded-full w-[60px] h-[60px] mt-[10px] flex justify-center items-center transition-all duration-500">
                {icon}
        
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner sideOffset={8} align="end">
                    <Popover.Popup className="bg-[#EFEFEF] dark:bg-[#484455] rounded-xl w-[400px] h-fit drop-shadow-lg flex flex-col items-center transition-all duration-500">
                        <DarmodeSwitch />
                        <LoginForm />
                        <Logout />
                        <div>{typeof test}</div>
                        
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    </div>
  )
}

export default UserButton