import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const{user,logOut}=useContext(AuthContext)
    const links = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/achieve"> All Tourists Spot</NavLink>
        </li>
        {/* <li><NavLink to="/about">About</NavLink></li> */}
        <li>
          <NavLink to="/faq">Add Tourists Spot</NavLink>
        </li>
        <li>
          <NavLink to="/contact">My List</NavLink>
        </li>
        </>
        
        
    );

    const handleLogOut = () => {
        logOut()
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
            console.log(error);
        })
    };
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <p>
          {user && (
            <span className="text-green-600 text-bold">{user.email}</span>
          )}
        </p>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn btn-outline btn-primary">Log out</button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;