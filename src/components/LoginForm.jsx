const LoginForm = () => {
  return (
    <div className="bg-red-200 w-[20vw] flex flex-col items-center">
        <h1>Login</h1>
        <form className="flex flex-col items-center gap-[0.5vh]">
            <input type="email" className="w-[200px] h-[20px] border-[2px] border-black rounded-full " />
            <input type="password" className="w-[200px] h-[20px] border-[2px] border-black rounded-full" />
        </form>
    </div>
  )
}

export default LoginForm