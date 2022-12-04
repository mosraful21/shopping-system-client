import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link>Home</Link></li>
        <li><Link>Categories</Link></li>
        <li><Link>Dashboard</Link></li>
    </>

    return (
        <div className="navbar bg-primary">
            {/******************** Menu Options ********************/}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-1 shadow bg-neutral rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-2xl text-base-100">Shop Zone</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-base-100 text-xl font-semibold">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                {/******************** Search field ********************/}
                <div className="dropdown dropdown-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                </div>

                {/******************** Login Avatar ********************/}
                <Link className='text-base-100 text-xl font-semibold mx-3'>Login</Link>
                <Link className='text-base-100 text-xl font-semibold mx-3'>Sign Up</Link>

                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className="justify-between">Profile</Link></li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;



