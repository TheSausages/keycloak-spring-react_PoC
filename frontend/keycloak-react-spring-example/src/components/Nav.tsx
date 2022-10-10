import React from "react";
import UserService from "../service/UserService";

const Nav = () => {
    return (
        <div>
            <div className="top-0 w-full flex flex-wrap">
                <section className="x-auto">
                    <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                            <h1 className="text-3xl font-bold font-heading">
                                Keycloak React AUTH.
                            </h1>
                            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li>
                                    <a className="hover:text-blue-800" href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue-800" href="/public">
                                        Public
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue-800" href="/secured">
                                        Secured Page
                                    </a>
                                </li>
                            </ul>
                            <div className="">
                                <div className="">
                                    {!UserService.isLoggedIn() && (
                                        <button
                                            type="button"
                                            className="text-blue-800"
                                            onClick={() => UserService.doLogin()}
                                        >
                                            Login
                                        </button>
                                    )}

                                    {UserService.isLoggedIn() && (
                                        <button
                                            type="button"
                                            className="text-blue-800"
                                            onClick={() => {
                                                UserService.doLogout()
                                            }}
                                        >
                                            Logout ({UserService.getUsername()})
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
        </div>
    );
};

export default Nav;