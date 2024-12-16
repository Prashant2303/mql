import { base_url } from "@/helpers"
import { List } from "@/types";
import { PublicListClient } from "./_components/PublicList";

export const revalidate = 60;

export default async function PublicList({ params }: { params: { listId: string } }) {
    const url = `${base_url}/public-lists/${params.listId}`;
    console.log(`HTTP request made to ${url}`);
    const res = await fetch(url);
    const list: List = await res.json();

    return <div>
        <h2>List {list.name} by {list.ownerName}</h2>
        <PublicListClient list={list} />
    </div>
}

export async function generateStaticParams() {
    const lists: List[] = await fetch(`${base_url}/public-lists`).then((res) => res.json());
    console.log(lists);

    const paths = lists.map((list) => ({
        listId: list._id,
    }))
    return paths;
}