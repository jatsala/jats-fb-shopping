import React, { useState, createContext, } from 'react';
import { app, messaging } from './firebase';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Shopping from './routes/Shopping';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import { Toaster, toast } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';

export const AppContex = createContext(null);

onMessage(messaging, payload => {
  // console.log('Nueva notificación en directo', payload);
  toast.custom((t) => (
    <div className="bg-sky-300 p-4 rounded-lg shadow-lg">
      <h1 className="text-lg text-sky-700 font-semibold">{payload.notification.title}</h1>
      <p className="text-sm text-sky-600">{payload.notification.body}</p>
    </div>
  )
  );
})

function App() {

  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);
  return (
    <AppContex.Provider value={{ route, setRoute, user, setUser }}>
      <div className='h-screen'>
        <Toaster />
        <Header />
        <main className='px-6 pt-24 pb-20'>
          {route === "home" && <Home />}
          {route === 'login' && <Login />}
          {route === 'register' && <Register />}
          {route === 'shopping' && <Shopping />}
          {route === 'tasklist' && <TaskList />}
        </main>
        <Footer />
      </div>
    </AppContex.Provider>
  );
}

export default App;
