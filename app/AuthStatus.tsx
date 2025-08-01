import React from "react";
import {IconType} from "react-icons";
import Link from "next/link";
import classNames from "classnames";
import {RxAvatar} from "react-icons/rx";
import {Session} from 'next-auth';
import {Skeleton} from "@/app/components";

interface Props {
    status: 'authenticated' | 'unauthenticated' | 'loading';
    session: Session | null;
}

const AuthStatus: React.FC<Props> = ({status, session}) => {
    // const {status, data: session} = useSession();

    if (status === "loading") return (
        <>
            <div className="pt-4 pb-8 ml-1 animate-pulse">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full">
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-24 h-4 bg-gray-700 rounded">
                                <Skeleton />
                            </div>
                        </div>
                        <div className="w-16 h-3 bg-gray-700 rounded">
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    if (status === "unauthenticated")
        return (
            <>
                <div className="pt-4 pb-8 ml-1">
                    <div className="flex items-center space-x-4">
                        <RxAvatar className="w-12 h-12 rounded-full object-cover"/>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                        <span className="text-white font-semibold">
                                            Unknown User
                                        </span>

                            </div>
                            <Link
                                href="/api/auth/signin"
                                className="nav-link"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )

    return (
        <>
            <div className="pt-4 pb-8 ml-1">
                <div className="flex items-center space-x-4">
                    {session?.user?.image && (
                        <img
                            src={session.user.image}
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    )}


                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                                    <span className="text-white font-semibold">
                                        {session?.user?.name}
                                    </span>
                            {/* Disabled edit icon for now until I decide if user modification is needed */}
                            {/*<MdEdit className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer"/>*/}
                        </div>
                        <Link
                            href="/api/auth/signout"
                            className="nav-link"
                        >
                            Log Out
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthStatus;
