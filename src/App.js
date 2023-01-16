import * as React from "react";
import {Link, Outlet} from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <div className="min-h-full">
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <Link to="login"
                                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                                    <Link to="signup"
                                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
                                </div>
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
    }
};
