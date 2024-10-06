import { base_url } from "@/helper"
import { List } from "@/types";
import { PublicListClient } from "./_components/PublicList";

export const revalidate = 60;

export default async function PublicList({ params }: { params: { listId: string } }) {
    const res = await fetch(`${base_url}/public-lists/${params.listId}`);
    const list: List = await res.json();

    return <div>
        <h2>List {list.name} by {list.ownerName}</h2>
        <PublicListClient list={list} />
    </div>
}

export async function generateStaticParams() {
    const lists: List[] = await fetch(`${base_url}/public-lists`).then((res) => res.json());
    const paths = lists.map((list) => ({
        listId: list._id,
    }))
    return paths;
}