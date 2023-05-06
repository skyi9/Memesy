// import React from 'react'

import Post from "../components/Post";
import PropTypes from "prop-types";

const Chips = ({ label }) => {
  return (
    <div
      data-te-chip-init
      data-te-ripple-init
      className="my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200 whitespace-nowrap"
      data-te-close="true"
    >
      {label}
    </div>
  );
};

Chips.propTypes = {
  label: PropTypes.string.isRequired,
};

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font grid grid-cols-10">
        <div className="container px-5 py-10 mx-auto col-span-6 border-x-2 border-slate-600">
          <div className="flex flex-row  gap-0 overflow-auto scrollbar-hide">
            <Chips label={"Pulkit"} />
            <Chips label={"Jain"} />
            <Chips label={"is"} />
            <Chips label={"Great"} />
            <Chips label={"Developer"} />
            <Chips label={"And"} />
            <Chips label={"Will"} />
            <Chips label={"Be"} />
            <Chips label={"Recognized"} />
            <Chips label={"As"} />
            <Chips label={"Something Great"} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="col-span-4 px-8 me-8">
          <div className="bg-white rounded-lg shadow-md p-4 mt-8">
            <div className="flex items-center mb-3">
              <h2 className="text-xl font-semibold">Who to follow</h2>
              <a href="#" className="ml-auto text-blue-500 hover:text-blue-700">
                Refresh
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/id/237/40/40"
                  alt="Profile picture"
                  className="rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-gray-500">@johndoe</p>
                </div>
                <button className="ml-auto text-blue-500 hover:text-blue-700">
                  Follow
                </button>
              </div>
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/id/238/40/40"
                  alt="Profile picture"
                  className="rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Jane Doe</h3>
                  <p className="text-gray-500">@janedoe</p>
                </div>
                <button className="ml-auto text-blue-500 hover:text-blue-700">
                  Follow
                </button>
              </div>
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/id/239/40/40"
                  alt="Profile picture"
                  className="rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Bob Smith</h3>
                  <p className="text-gray-500">@bobsmith</p>
                </div>
                <button className="ml-auto text-blue-500 hover:text-blue-700">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
