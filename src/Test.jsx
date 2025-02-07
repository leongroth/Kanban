const test = () => {

    function toggleTheme(){
        document.documentElement.classList.toggle("dark")
    }

  return (
    <div className="w-screen flex items-center justify-center">
        <button onClick={toggleTheme} className="w-[100px] h-[50px] bg-black text-white rounded-full font-semibold drop-shadow-lg hover:bg-gray-700">Darkmode</button>
    </div>
  )
}

export default test