import { navLinks } from "../content"

const Navbar = () => {
  return (
    <div className="w-screen h-[7vh] flex justify-center items-center">
      <div className="w-[50vw] h-[5vh] bg-[#EFEFEF] rounded-full inset-shadow-2xs flex items-center justify-between px-[1vw]">
        <h1 className="font-bold text-[3vh] text-start w-fit">Experience Pathways</h1>
        <div className="flex">
            {navLinks.map((item) => {
              if(item.href == window.location.pathname || `/${item.href}` == window.location.pathname){
                return (
                  <a href={item.href} className="text-[2vh] underline font-semibold w-[10vw] text-center">{item.label}</a>
                )
              } else {
                return (
                  <a href={item.href} className="text-[2vh] w-[10vw] text-center">{item.label}</a>
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
