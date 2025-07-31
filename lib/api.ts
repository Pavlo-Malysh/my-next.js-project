import axios from "axios";
import { Note } from "@/type/note";

axios.defaults.baseURL = 'https://next-docs-api.onrender.com';

interface ResponseHttpNotes {
    notes: Note[];
    total: number;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getNotes = async () => {
    await delay(3000);
    const response = await axios.get<ResponseHttpNotes>('/notes');
    return response.data
}

export const getSingleNote = async (id: string) => {
    const res = await axios.get<Note>(`notes/${id}`);
    return res.data
}