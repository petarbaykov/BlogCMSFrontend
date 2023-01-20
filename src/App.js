import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function NavigationLink ({ to, text }) {
    return (
        <Link to={to}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{text}</Link>

    )
}

export default function App (){
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-shrink-0">
                            <NavigationLink to="/" text="BlogCMS"/>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <NavigationLink to="/" text="Home"/>
                            {
                                user
                                    ?
                                    <>
                                        <NavigationLink to="/posts" text="Manage Articles"/>
                                        <NavigationLink to="/logout" text="Logout"/>
                                    </>
                                    :
                                    <>
                                        <NavigationLink to="/login" text="Sign in"/>
                                        <NavigationLink to="/signup" text="Sign up"/>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-7">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
