import { useState } from "react";
import DisplayForm from "./DisplayForm";

const Form = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [firstnameError, setFirstnameerror] = useState("");
    const [lastnameError, setLastnameerror] = useState("");
    const [emailError, setEmailerror] = useState("");
    const [passwordError, setPassworderror] = useState("");
    const [confirmpassworderror, setConfirmpassworderror] = useState("");

    const oneuser = {
            firstname,
            lastname,
            email,
            password,
            confirmpassword
        };
    const checkLength = (value) =>{
        setFirstname(value);
            if (value.length <2){
                setFirstnameerror("Field must be at least 2 characters")
            } else {setFirstnameerror("")};}
    const checkLength1 = (value) =>{
        setLastname(value);
            if (value.length <2){
                setLastnameerror("Field must be at least 2 characters")
            } else {setLastnameerror("")};}
    const checkLength2 = (value) =>{        
        setEmail(value);
            if (value.length <5){
                setEmailerror("Field must be at least 5 characters")
            } else {setEmailerror("")};}
    const checkLength3 = (value) =>{
        setPassword(value);
            if (value.length <8){
                setPassworderror("Field must be at least 8 characters")
            } else {setPassworderror("")};
        };
    const checkLength4 = (value) =>{
        setConfirmpassword(value);
            if (value.length <8){
                setConfirmpassworderror("Field must be at least 8 characters")
            } else {setConfirmpassworderror("")};
        };
    

    return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Sign UP
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Firstname
                        </label>

                        <input
                            onChange={(e)=>checkLength(e.target.value) }
                        
                            type="name"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p>{firstnameError}</p>
                    <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Lastname
                        </label>
                        <input
                            onChange ={(e)=>checkLength1(e.target.value)}
                            type="name"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p>{lastnameError}</p>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e)=>checkLength2(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p>{emailError}</p>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e)=>checkLength3(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p>{passwordError}</p>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            onChange={(e)=>checkLength4(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        
                    </div>
                    <p>{confirmpassworderror}</p>
                    {/* <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Login
                        </button>
                    </div> */}
                </form>
            </div>
            <div> <DisplayForm oneuser={oneuser} /></div>
        </div>
    )
}

export default Form