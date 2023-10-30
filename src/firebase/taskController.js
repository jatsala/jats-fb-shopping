// En este fichero crearemos toda la lógica de base de datos para las taks
import { db } from './index';
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";

export const addNewTask = async (task) => {
    await addDoc(collection(db, 'tasks'), task)
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));

    const tasks = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })
    return tasks;
}

export const updateTask = async (task) => {
    const id = task.id;
    delete task.id
    await setDoc(doc(db, 'tasks', id), { ...task })
}

export const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id))
}