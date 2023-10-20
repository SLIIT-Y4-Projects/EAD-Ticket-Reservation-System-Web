import React, { useState } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";


const UserManagement = () => {

    const { users, user, deactivateUser } = useContext(UserContext);
    const [id, setId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        deactivateUser(id);
        //activeUser(status);
    };

    return (
        <>
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Active User Management
            </h2>
            <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
                <input id="search-bar" placeholder="Search anything" className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />

                <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
                    Search
                </button>
            </form>

            <div className="flex justify-end mr-8">
                <Link to="/back-office/user/create">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8">
                        Create User
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </Link>
            </div>
            {/* component */}
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Full Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">User Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Change Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {users.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            } else if (val.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        })
                            .filter((elem) => elem.status == "ACTIVE")

                            .map((elem) => (
                                <tr className="hover:bg-gray-50">
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">

                                        <div className="text-sm">
                                            <div className="font-medium text-gray-700">{elem.fullName}</div>

                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="text-sm">
                                            <div className="font-medium text-gray-700">{elem.username}</div>

                                        </div>
                                    </td>
                                    <td className="px-6 py-4">

                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                                            {elem.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4">

                                        {id === elem.id ? (
                                            <div>
                                                <form onSubmit={handleSubmit}>
                                                    {/* eslint-disable-next-line no-console */}
                                                    {console.log(id)}
                                                    <select name="status" id="status" defaultValue={user.status}>
                                                        <option value="ACCEPT">Deactivate</option>
                                                    </select>
                                                    <div>
                                                        <button
                                                            className="bg-green-500 p-1 rounded-sm text-white"
                                                            type="submit"
                                                            value="Submit"
                                                        >
                                                            change Status
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        ) : (
                                            <div>
                                                <div>{user.status}</div>
                                                <button
                                                    className="bg-red-500 p-1 rounded-sm text-white"
                                                    onClick={() => setId(elem.id)}
                                                >
                                                    change
                                                </button>
                                            </div>
                                        )}
                                    </td>


                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-4">
                                            <a x-data="{ tooltip: 'Delete' }" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </a>
                                            <a x-data="{ tooltip: 'Edite' }" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <Link to="/back-office/de-active/users">
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 ml-8">
                    DeActive Users
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </Link>

        </>
    );


};

export default UserManagement;