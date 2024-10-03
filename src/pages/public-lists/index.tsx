import Link from "next/link";

export const base_url = 'https://my-question-list.onrender.com/api';

export type List = {
    _id: string,
    ownerId: string,
    name: string,
    access: string,
    ownerName: string,
    likes: number,
    questions: Question[]
}

type Question = {
    url: string
    site: string
    name: string
    difficulty: string
    status: string
    category: string
    notes: string
    id: string
    date: string
}

export default function PublicLists({ lists }: { lists: List[] }) {
    console.log('LISTS', lists);

    return <div>
        <h1>Page Router</h1>
        <h2>Public List</h2>
        {lists.map(list => <div key={list._id}>
            <Link href={`/public-lists/${encodeURIComponent(list._id)}`}>
                {list.name}
            </Link>
        </div>)}
    </div>
}

export async function getStaticProps() {
    const res = await fetch(`${base_url}/public-lists`);
    const lists = await res.json();
    return {
        props: { lists },
        revalidate: 60
    }
}
