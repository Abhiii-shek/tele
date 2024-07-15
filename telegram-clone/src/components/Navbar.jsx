import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

import { IoIosClose } from "react-icons/io";

function Navbar() {
    const hiddenMenu = () =>{
        const navBar=document.getElementById("nav-dialog")
        navBar.classList.toggle("hidden")

    }

  return (
    <>
    <nav className='w-screen top-0 z-999 bg-slate-800 p-4 text-white fixed '>
        {/* <div className='menu text-3xl '>
        <RxHamburgerMenu />

        </div>
        <div className='logo'>
        <h1 className=' text-4xl'>Telegram</h1>

        </div>
        <div className='search-icon text-3xl'>
        <CiSearch />

        </div> */}
        <div className='flex '>
            

        {[<RxHamburgerMenu className='' onClick={hiddenMenu} />,"Telegram", <CiSearch />].map((item,index)=>(
            <button key={index} href="" className={`flex justify-center items-center text-2xl ${index===1 && "pl-5"} ${index===2 && " ml-40" }`}>{item}
            
            </button>
        ))}
        </div>

        <div id="nav-dialog" className=' inset-0 hidden  fixed w-[80%]'>
            <div className='bg-zinc-900 h-44 p-4'>
                <button className='text-2xl' onClick={hiddenMenu}><IoIosClose className=''/></button>
                <img className='h-16 w-16 rounded-full bg-white ' src="" alt="" />

                <h1 className='pt-2 text-xl'>Abhishek</h1>
                <p className='text-gray-500'>+919324533277</p>

            </div>
            <div className='h-full bg-zinc-800'>
                {["New Group", "Contacts","Calls", "People Nearby","Saved Messages", "Settings","Invite Friends","Telegram Features"].map((item,index)=>
                <a href='#' className={`flex pl-4 text-2xl font-semibold pt-2 ${index===6 && "border-t-2 mt-2 border-black"} `}>{item}</a>
                )}
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar