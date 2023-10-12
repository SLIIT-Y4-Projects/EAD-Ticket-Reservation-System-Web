import React, { useContext } from "react";
import BackOfficeContext from "../../contexts/BackOfficeContext";
import { Link } from "react-router-dom";


const BackOfficeDashboard = () => {

  const { getOne, backOfficeUser, backOfficeUsers } = useContext(BackOfficeContext);

  const username = localStorage.getItem("username");
  const role = localStorage.getItem("permissionLevel")
  getOne(username);
  return (
    <>

      <div className="mt-6">
        {/* component */}
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <div>
            <div className="-mx-6 px-6 py-4">

            </div>
            <div className="mt-16 text-center">
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{username}</h5>
              <span className="hidden text-gray-400 lg:block">{role}</span>
            </div>

          </div>
          <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">

          </div>
        </aside>
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
            <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
              <h5 hidden className="text-2xl text-black-600 font-extrabold lg:block">Dashboard</h5>
              <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex space-x-4">
                {/*search bar */}
                <div hidden className="md:block">
                  <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                    <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                      <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                        <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z" />
                      </svg>
                    </span>
                    <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                  </div>
                </div>
                {/*/search bar */}
                <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                  <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z" />
                  </svg>
                </button>
                <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </button>
                <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 pt-6 2xl:container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="md:col-span-2 lg:col-span-1">
                <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                  <h5 className="text-xl text-center mb-2 font-bold">User Management</h5>

                  {/*Image First   */}
                  <Link to="back-officer/user-management">
                    <img
                      src="/tes.svg"
                    />
                  </Link>

                </div>
              </div>
              <div>
                <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                  <h5 className="text-xl text-center mb-2 font-bold">Train Management</h5>


                  {/* Second Image  */}

                  <Link to="back-officer/user-management">
                    <img
                      src="/train.svg"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">

                  <h5 className="text-xl text-gray-700">Downloads</h5>
                </div>
              </div>


            </div>
          </div>
          {/* component */}
          <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">User Name</th>
                      <th className="px-4 py-3">ROLE</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {backOfficeUsers.map((elem) => (

                      <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">

                            <div>
                              <p className="font-semibold text-black">{elem.fullName}</p>

                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">{elem.username}</td>
                        <td className="px-4 py-3 text-xs border">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">Back Office</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BackOfficeDashboard;