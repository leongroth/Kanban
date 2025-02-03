const Navbar = () => {
  return (
    <div className="w-screen h-[7vh] flex justify-center items-center">
      <div className="w-[50vw] h-[5vh] bg-[#EFEFEF] rounded-full inset-shadow-2xs flex items-center justify-between px-[1vw]">
        <h1 className="font-bold text-[3vh] text-start w-fit">Experience Pathways</h1>
        <div className="flex gap-[5vw]">
            <a className="font-semibold text-[2vh] underline" href="/">Tasks</a>
            <a className="font-regular text-[2vh]" href="/summary">Summary</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
