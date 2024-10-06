import { base_url } from "@/helper";
import { List } from "@/types";
import Link from "next/link";

export default function PublicLists({ lists }: { lists: List[] }) {
    // console.log('LISTS', lists);

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
