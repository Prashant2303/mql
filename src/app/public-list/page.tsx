import { base_url } from "@/helper";
import { List } from "@/types";
import Link from "next/link";
import styles from "./page.module.css";

export const revalidate = 60;

export default async function PublicLists() {
    const res = await fetch(`${base_url}/public-lists`);
    const lists: List[] = await res.json();
    console.log('Public Lists', lists);

    return <div>
        <h1>Public Lists</h1>
        {lists.map(list => <div key={list._id}><Link className={styles.link} href={`/public-list/${list._id}`}>
            {list.name}
        </Link>
        </div>)}
    </div>
}