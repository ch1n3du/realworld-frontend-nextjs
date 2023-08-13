'use client'
import { UserResponse } from "@/requests";
import { useLocalStorage } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    let [user, setUser] = useLocalStorage('user', JSON.stringify({}));
    let parsedUser: UserResponse = JSON.parse(user);
    console.log(`PARSED_USER: ${JSON.stringify(parsedUser)}`);
    

    return (
        <nav className="border-b px-8 py-2 flex justify-between">
            {/* Medium logo */}
            <a href="/">
            <svg viewBox="0 0 1043.63 592.71" className="au av w-11">
                <g data-name="Layer 2">
                    <g data-name="Layer 1">
                        <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94">
                        </path>
                    </g>
                </g>
            </svg>
            </a>

            <div className="--bg-red-600 flex  items-center justify-between">
                {/* Write button */}
                <Link href="/editor" className="flex --bg-blue-600">
                    <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write">
                        <path className="" d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor">
                        </path>
                            <path  stroke="currentColor"  d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2">
                        </path>
                    </svg>
                    <span className="mx-1"></span>
                    <span className="lighten-text-on-hover">Write</span>
                </Link>

                {user.length >= 3  
                ? (
                <span>
                    <span>{}</span>
                </span>
                )
                : (
                <span>
                    <span className="mx-1 md:mx-2.5"></span>

                    <span>
                        <Link href="/signin"
                        className="align-middle hidden md:inline-block lighten-text-on-hover">Sign In</Link>
                        <span className="mx-1"></span>
                        <Link href="/signup"
                        className="align-middle px-2 py-1 rounded-full lighten-bg-on-hover text-white">Get started</Link> 
                    </span>

                    <span className="mx-1.5 md:mx-2.5"></span>
                </span>
                )
                                }


                {// TODO Fix link
                }
                <a href="/">
                    <Image
                        src="/pfp.jpg"
                        height={35}
                        width={35}
                        alt=""
                    />
                </a>
            </div>
        </nav>
    )
}