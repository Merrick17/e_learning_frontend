import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const { token, userData } = useSelector((state) => state.auth);
  const disptach = useDispatch();

  const logOut = () => {
    localStorage.clear();
    history.replace("/login");
    disptach({
      type: "LOGOUT_USER"
    });
  };
  const verfiToken = () => {
    if (token !== "") {
      return true;
    } else {
      return false;
    }
  };
  const goToProfile = () => {
    if (userData.role == 0) {
      history.push("/etudiant/profile/" + userData._id);
    } else if (userData.role == 1) {
      history.push("/admin/profile/" + userData._id);
    } else {
      history.push("/formateur/profile/" + userData._id);
    }
  };
  return (
    <div className="container items-center ">
      <div className="items-center justify-between w-full px-5 overflow-y-auto tflex whitespace-nowrap scroll-hidden ">
        <div className="flex flex-col flex-wrap mx-auto md:items-center md:flex-row">
          <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
              <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
                {" "}
                CAPDEV{" "}
              </h2>
            </div>
          </a>
          <nav className="flex flex-wrap items-center justify-start text-base ">
            <ul className="items-center inline-block list-none lg:inline-flex">
              {!verfiToken() && (
                <li>
                  <Link
                    to="/formation"
                    className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                  >
                    FORMATIONS
                  </Link>
                </li>
              )}
              {!verfiToken() && (
                <li>
                  <Link
                    to="/contact"
                    className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                  >
                    CONTACT
                  </Link>
                </li>
              )}
              {!verfiToken() && (
                <li>
                  <Link
                    to="/login"
                    className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                  >
                    CONNEXION
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          {verfiToken() && (
            <div className="flex flex-row flex-1 items-center justify-end">
              <button
                class="flex items-center px-6 py-2 m-2 text-blue-800 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-700 hover:text-white border-2 border-blue-800 focus:outline-none"
                onClick={goToProfile}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Mon Profil
              </button>
              <button
                onClick={logOut}
                class="flex items-center px-6 m-2 py-2  text-blue-800 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-700 hover:text-white border-2 border-blue-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Deconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
