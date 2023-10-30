import React, { useState, useContext } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContex } from '../App';

const auth = getAuth();

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setRoute, setUser } = useContext(AppContex);

    const creaUsuario = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log('user', user);
                toast(`¡Usuario ${email} registrado correctamente!`);
                // setEmail('');
                // setPassword('');
                setUser(user);
                setRoute('home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        creaUsuario();
    }

    return (
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-sky-600 font-semibold text-center'>¡Regístrate para tener acceso a la app!</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-sm'>
                <input className='border border-gray-500 rounded py-1 px-2 outline-none' id='emailRegister' type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                <input className='border border-gray-500 rounded py-1 px-2 outline-none' id='passwordRegister' type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                <button className='bg-sky-400 py-1 text-white rounded shadow'>Regístrate</button>
            </form>
        </div>
    )
}

export default Register
