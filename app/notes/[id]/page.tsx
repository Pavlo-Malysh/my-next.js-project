import { getSingleNote } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

interface Props {
    params: Promise<{ id: string }>;
}

const NoteDetails = async ({ params }: Props) => {
    const { id } = await params;
    console.log('params', params);

    const queryClient = new QueryClient();


    await queryClient.prefetchQuery({
        queryKey: ['note', id],
        queryFn: () => getSingleNote(id),
    })

    console.log('params id:', id);


    // const formattedDate = note.updatedAt
    //     ? `Updated at: ${note.updatedAt}`
    //     : `Created at: ${note.createdAt}`;

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient />
        </HydrationBoundary>
    );
}

export default NoteDetails