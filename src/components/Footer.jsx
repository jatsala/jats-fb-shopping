import React, { useContext } from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { BsCartFill, BsList } from 'react-icons/bs';
import { AppContex } from '../App';

const Footer = () => {
    const { setRoute } = useContext(AppContex);
    return (
        <footer className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
            <div className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute('home')}>
                <IoHomeSharp />
            </div>
            <div className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute('shopping')}>
                <BsCartFill />
            </div>
            <div className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition list-route' onClick={() => setRoute('tasklist')}>
                <BsList />
            </div>
        </footer>
    )
}

export default Footer
