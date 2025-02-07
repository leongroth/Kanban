import { Popover, Switch } from "@base-ui-components/react"

const UserButton = () => {
  return (
    <div className="absolute left-[5%] h-[9vh]">
        <Popover.Root>
            <Popover.Trigger className="bg-[#EFEFEF] drop-shadow-lg rounded-full w-[8vh] h-[8vh] mt-[1vh] flex justify-center items-center">
                <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[5vh] h-[5vh]">
                    <path d="M23.1833 18.1833C24.8173 16.8978 26.01 15.1349 26.5954 13.1399C27.1808 11.1449 27.1299 9.01709 26.4496 7.05243C25.7694 5.08777 24.4938 3.38397 22.8001 2.17808C21.1065 0.972182 19.0791 0.324158 17 0.324158C14.9209 0.324158 12.8935 0.972182 11.1999 2.17808C9.50624 3.38397 8.23057 5.08777 7.55035 7.05243C6.87013 9.01709 6.81918 11.1449 7.4046 13.1399C7.99001 15.1349 9.18267 16.8978 10.8167 18.1833C8.01679 19.3051 5.57381 21.1656 3.74815 23.5665C1.92249 25.9675 0.782599 28.8188 0.449994 31.8166C0.425919 32.0355 0.445189 32.257 0.506704 32.4684C0.568218 32.6798 0.670773 32.8771 0.808514 33.0489C1.08669 33.3958 1.4913 33.618 1.93333 33.6667C2.37536 33.7153 2.81859 33.5863 3.16554 33.3081C3.51248 33.03 3.73471 32.6253 3.78333 32.1833C4.1493 28.9253 5.70281 25.9163 8.14703 23.7313C10.5912 21.5463 13.7548 20.3384 17.0333 20.3384C20.3118 20.3384 23.4754 21.5463 25.9196 23.7313C28.3639 25.9163 29.9174 28.9253 30.2833 32.1833C30.3286 32.5929 30.5241 32.9711 30.8318 33.245C31.1396 33.5189 31.538 33.6692 31.95 33.6667H32.1333C32.5702 33.6164 32.9695 33.3955 33.2443 33.0521C33.519 32.7087 33.6469 32.2706 33.6 31.8333C33.2658 28.827 32.1198 25.9683 30.2847 23.5637C28.4497 21.159 25.9948 19.2991 23.1833 18.1833ZM17 17C15.6815 17 14.3925 16.609 13.2962 15.8764C12.1999 15.1439 11.3454 14.1027 10.8408 12.8845C10.3362 11.6664 10.2042 10.3259 10.4614 9.03272C10.7187 7.73951 11.3536 6.55162 12.2859 5.61927C13.2183 4.68692 14.4062 4.05198 15.6994 3.79475C16.9926 3.53751 18.333 3.66954 19.5512 4.17412C20.7694 4.67871 21.8106 5.53319 22.5431 6.62952C23.2757 7.72584 23.6667 9.01478 23.6667 10.3333C23.6667 12.1014 22.9643 13.7971 21.714 15.0474C20.4638 16.2976 18.7681 17 17 17Z" fill="black"/>
                </svg>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner sideOffset={8} align="end">
                    <Popover.Popup className="bg-[#EFEFEF] rounded-xl w-[30vw] h-[30vh] drop-shadow-lg flex flex-col items-center ">
                        <Switch.Root defaultChecked className="bg-white w-[50px] h-[30px] rounded-full mt-[10px] active:bg-gray-500">
                            <Switch.Thumb>
                                <div className="bg-blue-200 w-[25px] h-[25px] rounded-full" />
                            </Switch.Thumb>
                        </Switch.Root>
                        <div className="w-full h-[80%] flex flex-col justify-center items-center">
                            <h1 className="font-semibold">LogIn</h1>
                            <div className="w-[20vw]">
                                <h2 className="text-gray-500">Email</h2>
                                <input type="email" className="rounded-full w-full" />
                                <h2 className="text-gray-500">Password</h2>
                                <input type="password" className="rounded-full w-full"/>
                            </div>
                        </div>
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    </div>
  )
}

export default UserButton