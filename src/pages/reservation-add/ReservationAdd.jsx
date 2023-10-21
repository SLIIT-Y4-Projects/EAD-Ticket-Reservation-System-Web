import React, { useState , useContext ,useEffect} from "react";
import UserAPI from "../../contexts/api/UserAPI";
import ReservationContext from "../../contexts/ReservationContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ReservationAdd = () => {

  const {reservations , createReservation} = useContext(ReservationContext);
  const [users , setUsers]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [id1,setId1]=useState("");


  // get all reservations
  useEffect(() => {
    UserAPI.getAll().then((response) => {
        setUsers(response.data);
    });
}, []);

  const {id}=useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      reservationDate: e.target.reservationDate.value,
      status: "ACTIVE",
      passengerId: e.target.passengerId.value,
      trainId: id,
    };

    createReservation(newReservation);

  };

  const ChangeId=(id)=>{
    console.log(id);
    setId1(id);
  }

  return (

    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Make A New Reservation
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit}>
             
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">
                  Reservation Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input id="reservationDate" type="date" required defaultValue className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                " />
                  <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Passenger NIC</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div>
                    <input className="w-full px-3 py-2 border-gray-800" 
                           name="passengerId" id="passengerId" 
                           list="data"
                           type="text"
						placeholder="  Enter Name"
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}/>
                        <datalist id="data">
                        {users.filter((val) => {
													if (searchTerm == "") {
														return val;
													} else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
														return val;
													}
												})
                        .map((users) => (
                    <option value={users.id}>{users.username}</option>
                   ))} 
                        </datalist>
                   
                    </div>
                
                </div>
              </div>
         
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Reserve
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>


  );

};

export default ReservationAdd;