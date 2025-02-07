import { navLinks } from "../content"

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] flex justify-center items-end">
      <div className="w-[960px] h-[60px] bg-[#EFEFEF] dark:bg-[#484455] rounded-full inset-shadow-2xs flex items-center justify-between pl-[10px] pr-[100px] transition-all duration-500">
        <h1 className="font-bold text-4xl text-start w-fit text-black dark:text-white transition-all duration-500">Experience Pathways</h1>
        <div className="flex gap-20">
            {navLinks.map((item) => {
              if(item.href == window.location.pathname || `/${item.href}` == window.location.pathname){
                return (
                  <a href={item.href} className="text-2xl underline font-semibold text-center text-black dark:text-white transition-all duration-500">{item.label}</a>
                )
              } else {
                return (
                  <a href={item.href} className="text-2xl text-center text-black dark:text-white transition-all duration-500">{item.label}</a>
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
