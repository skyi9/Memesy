// import React from 'react'

import Post from "../components/Post"

const Home = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col justify-center align-center -m-4">
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
