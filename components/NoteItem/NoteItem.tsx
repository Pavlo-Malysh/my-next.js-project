import type { Note } from "@/type/note";
import css from './NoteItem.module.css';
import Link from "next/link";

interface PropsNote {
    item: Note;
}

const NoteItem = ({ item }: PropsNote) => {
    return (
        <li className={css.noteItem} key={item.id}>
            <Link href={`/notes/${item.id}`}>{item.title}</Link>
        </li>

    )
}

export default NoteItem;