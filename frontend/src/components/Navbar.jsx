// import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white text-black flex justify-between items-center gap-16 px-40 py-2 h-28">
                <div className="text-xl font-bold text-purple-700"><i className="fa-brands fa-meetup fa-xl mr-2" style={{ color: '#9900CC' }}></i> Memesy</div>
                <div className="relative text-gray-600">
                    <input
                        className="w-full h-10 px-5 pr-40 rounded-full bg-gray-100 focus:outline-none focus:bg-white"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 mt-3 mr-4"
                    >
                        <svg
                            className="h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className="heroicon-ui"
                                d="M17.28 15.72a8.56 8.56 0 1 0-1.56 1.56l5.43 5.42a1 1 0 0 0 1.42 0l.07-.07a1 1 0 0 0 0-1.42l-5.42-5.43zm-7 0a5.58 5.58 0 1 1 5.58-5.58 5.58 5.58 0 0 1-5.58 5.58z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center items-center">
                    <a href="/" className="ml-4 hover:text-gray-300"><i className="fa-solid fa-user fa-lg mr-4"></i></a>
                    <a href="/" className="ml-4 hover:text-gray-300"><i className="fa-solid fa-bell fa-lg"></i></a>
                </div>
            </nav>

        </>
    )
}

export default Navbar
