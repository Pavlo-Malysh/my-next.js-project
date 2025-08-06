'use client'
import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const NoteDetailsClient = () => {
    const { id } = useParams<{ id: string }>()

    const { data: note } = useQuery({
        queryKey: ['note', id],
        queryFn: () => getSingleNote(id),
        refetchOnMount: false,
    })

    return <div>
        <p>{note?.title}</p>
        <p>{note?.content}</p>
    </div>
}

export default NoteDetailsClient;