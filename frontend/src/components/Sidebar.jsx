

function Sidebar() {

    return (
        <div className="h-screen flex overflow-hidden bg-white">
            <div className="flex-shrink-0 shadow-md w-full">
                <div className="p-4 mt-auto">
                    <button className="flex items-center bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 pl-16 rounded-full mb-4 w-full">
                        <i className="fa-solid fa-house m-2"></i>
                        <span className="flex-grow text-left">Home</span>
                    </button>
                    <button className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 pl-16 rounded-full mb-4 w-full">
                        <i className="fa-solid fa-fire m-2"></i>
                        <span className="flex-grow text-left">Trending</span>
                    </button>
                    <button className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 pl-16 rounded-full mb-4 w-full">
                        <i className="fa-solid fa-circle-plus m-2"></i>
                        <span className="flex-grow text-left">Create</span>
                    </button>
                    <button className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 pl-16 rounded-full mb-4 w-full">
                        <i className="fa-solid fa-play m-2"></i>
                        <span className="flex-grow text-left">Pints</span>
                    </button>

                </div>
            </div>
        </div>

    );
}

export default Sidebar;
