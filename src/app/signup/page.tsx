'use client'
import { useRouter } from "next/navigation";

import FormError from "@/components/form_error";
import { Requests, UserResponse } from "@/requests";
import {  setUserData, validateEmail } from "@/utils";
import { FormEvent, useState } from "react";

export default function SignupPage() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const attemptLogin = async (event: FormEvent) => {
        let requestBody = JSON.stringify({
            user: {
                email: email,
                password: password,
            }
        });

        try {
            if (validateEmail(email) === false) {
                setError("Invalid email");
                return;
            }
            let response =  await Requests.registerUser({
                username,
                email,
                password
            });
            if (typeof response === 'string') {
                console.log(`API_ERR: ${response}`);
            }
            // TODO Store user info in localStorage
            setUserData(response as UserResponse)
        } catch (error) {
            console.log(`Error: ${error}`);
            return;
        }
        router.push('/')
    };


    return (
        <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center p-9 w-md">
            <form method="POST" onSubmit={attemptLogin}
            className="flex flex-col w-sm">
                <h2 className="text-4xl font-playfair">Sign up</h2>
                <div className="my-2"></div>

                {/* Error display */}
                {error.length > 0 && 
                <FormError errorMessage={error} />
                } 

                <input
                    type="text"
                    placeholder="Username"
                    className="px-4 py-2 bg-slate-100 rounded-sm"
                    onChange={(event) => setUsername(event.target.value)}
                />
                <div className="my-1"></div>
                <input
                    type="text"
                    placeholder="Email"
                    className="px-4 py-2 bg-slate-100 rounded-sm"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div className="my-1"></div>
                <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 bg-slate-100 rounded-sm"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <div className="my-1.5"></div>
                <input
                    type="submit"
                    value="Submit" 
                    className="mt-2 p-1 rounded-sm lighten-bg-on-hover text-white" 
                />
            </form>
        </div>
        </div>
    )
}
