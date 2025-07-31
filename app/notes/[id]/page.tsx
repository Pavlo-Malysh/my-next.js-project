import { getSingleNote } from "@/lib/api";

interface Props {
    params: Promise<{ id: string }>;
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const NoteDetails = async ({ params }: Props) => {
    const { id } = await params;
    console.log('params', params);

    delay(3000);
    const note = await getSingleNote(id)
    console.log('params id:', id);
    console.log(note);

    const formattedDate = note.updatedAt
        ? `Updated at: ${note.updatedAt}`
        : `Created at: ${note.createdAt}`;

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button>Edit</button>
            <p>{formattedDate}</p>
        </div>
    );
}

export default NoteDetails