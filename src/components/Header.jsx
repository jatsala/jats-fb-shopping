import React, { useContext } from 'react';
import { SiFirebase } from 'react-icons/si';
import { AppContex } from '../App';
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();

const Header = () => {

    const { setRoute, user, setUser } = useContext(AppContex);
    const hazLogout = () => {
        signOut(auth).then(() => {
            setRoute('login');
            setUser(null);
            toast('Usuario ha salido de la app')
        }).catch((e) => {
            console.error(e);
        });
    }

    return (
        <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0">
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute('home')}>
                <SiFirebase className='text-2xl text-pink-600' />
                <div className='text-xl font-semibold text-pink-600'>FbShopping</div>
            </div>
            <div className='flex gap-2'>
                {user ? <>
                    <button onClick={hazLogout}>Logout</button>
                </> :
                    <>
                        <button className='bg-sky-500 text-white py-1 px-3 hover:bg-sky-700 transition rounded-full' onClick={() => setRoute('login')}>Loguin</button>
                        <button onClick={() => setRoute('register')}>...o regístrate</button>
                    </>}
            </div>
        </header>
    )
}

export default Header
