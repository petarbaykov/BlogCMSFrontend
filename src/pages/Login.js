import React, { useState } from "react";
import api from "../services/api";
import {setUser} from "../store/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async e => {
        e.preventDefault();

        const response = await api.post('/auth/login', { username, password });

        if (response.status === 200) {
            dispatch(setUser(true));
            navigate("/");
        }
    }

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your
                            account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={login}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input id="username"
                                   name="username"
                                   type="username"
                                   autoComplete="username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                                   required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password"
                                   name="password"
                                   type="password"
                                   autoComplete="current-password"
                                   required
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Password" />
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                               Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}