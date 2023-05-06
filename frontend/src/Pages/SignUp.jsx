
const SignUp = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-96 bg-white rounded-lg shadow-md pb-8">
                    <div className="flex justify-center py-8">
                        <i className="fa-brands fa-meetup fa-2xl" style={{ color: '#9900CC' }}></i>
                    </div>
                    <form className="px-8 pb-8">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                            <input type="text" id="username" name="username" className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
                    </form>
                    <div className="px-8 pb-4 text-center">
                        <p className="text-gray-700">Already have an account? <a href="#" className="text-blue-500 font-semibold hover:underline">Log in</a></p>
                    </div>
                    <div className="px-8 text-center">
                        <p className="text-gray-700">By signing up, you agree to our <a href="#" className="text-blue-500 font-semibold hover:underline">Terms</a> and <a href="#" className="text-blue-500 font-semibold hover:underline">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
