'use client'
import { ResponseError, Status } from "@/responses";
import { API_URL } from "@/utils"
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // let authError: ResponseError | null = null;

    const attemptLogin = async (event: FormEvent) => {
        let requestBody = JSON.stringify({
            user: {
                email: email,
                password: password,
            }
        });

        try {
            let res = await fetch(`${API_URL}/users/login`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                cache: "no-store",
                body: requestBody,
            });
            let body = await res.json();
            switch (res.status) {
                case Status.Ok:
                    setError("");
                    break;
                default:
                    let errorMessage = (body as ResponseError).message;
                    setError(errorMessage);
                    break;
            }
            console.log(`RES: ${JSON.stringify(body)}`)
        } catch (error) {
            console.log(`Error: ${error}`);
        }
        event.preventDefault()
    };


    return (
        <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center p-9 w-md">
            <form method="POST" onSubmit={attemptLogin}
            className="flex flex-col w-sm">
                <h2 className="text-4xl font-playfair">Login</h2>
                <div className="my-1.5"></div>

                {/* Error display */}
                {error.length > 0 && 
                    <div className="">
                        <div className="flex pl-2 p-1 bg-red-100 text-red-900">
                            <Image
                              src="icons/warning-sign.svg"
                              height={18}
                              width={18}
                              alt=""
                            />
                            <span className="mx-1"></span>
                            {error}
                        </div>
                        <div className="mb-3"></div>
                    </div>
                } 

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
                    className="mt-2 p-1 rounded-sm bg-slate-950 hover:bg-slate-700 text-white" 
                />
            </form>
        </div>
        </div>
    )
}