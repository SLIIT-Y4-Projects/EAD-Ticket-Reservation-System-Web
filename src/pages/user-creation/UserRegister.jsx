import React, { useState } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const UserRegister = () => {

    const {register } =useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          fullName: e.target.fullName.value,
          username: e.target.username.value,
          password: e.target.password.value,
        };
    
        register(newUser);
      };

    return (
        <>

            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Create Traveler
            </h2>
            <div className="flex items-center justify-center p-12">


                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit} >
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input type="text"  id="fullName" placeholder="Full name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                User Name
                            </label>
                            <input type="text" id="username" placeholder="User name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label  className="mb-3 block text-base font-medium text-[#07074D]">
                                Password
                            </label>
                            <input type="password"  id="password" placeholder="**************" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        
                        <div>
                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            type="submit"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    );


};

export default UserRegister;