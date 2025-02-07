import { navLinks } from "../content"

const Navbar = () => {
  return (
    <div className="w-screen h-[9vh] flex justify-center items-end">
      <div className="w-[50vw] h-[8vh] bg-[#EFEFEF] dark:bg-[#484455] rounded-full inset-shadow-2xs flex items-center justify-between px-[1vw]">
        <h1 className="font-bold text-[5vh] text-start w-fit text-black dark:text-white">Experience Pathways</h1>
        <div className="flex">
            {navLinks.map((item) => {
              if(item.href == window.location.pathname || `/${item.href}` == window.location.pathname){
                return (
                  <a href={item.href} className="text-[3vh] underline font-semibold w-[10vw] text-center text-black dark:text-white">{item.label}</a>
                )
              } else {
                return (
                  <a href={item.href} className="text-[3vh] w-[10vw] text-center text-black dark:text-white">{item.label}</a>
                )
              }
            })
            }
        </div>
      </div>
    </div>
  )
}

export default Navbar
