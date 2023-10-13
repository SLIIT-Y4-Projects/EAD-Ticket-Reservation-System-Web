import React, { useContext, useState } from "react";
import TravelAgentContext from "../../contexts/TravelAgentContext";
import { Link } from "react-router-dom";

const TravelAgentLogin = () => {

  const { login } = useContext(TravelAgentContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(newUser);
  }

  return (
    <>


      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://media.licdn.com/dms/image/D4E12AQFPdgj7RUwFVw/article-cover_image-shrink_720_1280/0/1687777084712?e=2147483647&v=beta&t=pERew95BzNqf1bWf0An5qp_iSBeIQGKJrqtcF0GVYY8")' }} />
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <h3 className="pt-4 text-2xl text-center font-bold">Travel Agent</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                    Username
                  </label>
                  <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

                </div>
                <div className="mb-8">
                  <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                  <label className="text-sm" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                    Login
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link to="/travel-agent/register">
                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                      Create an Account!
                    </a>
                  </Link>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelAgentLogin;
