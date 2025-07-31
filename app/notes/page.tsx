import NoteList from "@/components/Notelist/NoteList";
import { getNotes } from "@/lib/api";


const Notes = async () => {
    const res = await getNotes()
    console.log(res);

    return (<section>
        <h1>NoteList</h1>
        <NoteList notes={res.notes} />
    </section>)
}

export default Notes;