import type { Note } from "@/type/note"
import NoteItem from "../NoteItem/NoteItem";
import css from './NoteList.module.css';


interface PropsNotes {
    notes: Note[];
}

const NoteList = ({ notes }: PropsNotes) => {
    return (
        <ul className={css.noteList}>
            {
                notes.map((note) => <NoteItem key={note.id} item={note} />)
            }
        </ul>

    )
}

export default NoteList;