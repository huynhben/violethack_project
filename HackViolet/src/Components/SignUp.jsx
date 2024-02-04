function SignUp() {
    return (<>
    <div className="h-screen flex items-center justify-center">
        <div className="bg-violet-400 h-1/2 w-1/2 rounded-lg flex flex-col items-center justify-between">
            <div className="text-5xl font-bold">Sign Up</div>
            <div className="text-3xl">
                <span>First Name: </span>
                <input type="text" className="rounded-lg"></input>
            </div>
            <div className="text-3xl">
                <span>Last Name: </span>
                <input type="text" className="rounded-lg"></input>
            </div>
            <div className="text-3xl">
                <span>Email: </span>
                <input type="text" className="rounded-lg"></input>
            </div>
            <div className="text-3xl">
                <span>Password: </span>
                <input type="text" className="rounded-lg"></input>
            </div>
            <div className="text-3xl">
                <span>Repeat Password: </span>
                <input type="text" className="rounded-lg"></input>
            </div>
            <button className="text-4xl font-bold rounded-full py-3 px-6 bg-violet-500 hover:bg-violet-600">Submit</button>
            

        </div>
    </div>
    
    </>)
}

export default SignUp