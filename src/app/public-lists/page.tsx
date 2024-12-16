import { base_url } from "@/helpers";
import { List } from "@/types";
import Link from "next/link";
import styles from "./styles.module.css";

export const revalidate = 60;

export default async function PublicLists() {
    const url = `${base_url}/public-lists`;
    console.log(`HTTP request made to ${url}`);
    const res = await fetch(url);
    const lists: List[] = await res.json();
    console.log('Public Lists', lists);

    return <div>
        <h1>Public Lists</h1>
        {lists.map(list =>
            <Link key={list._id} className={styles.link} href={`/public-lists/${list._id}`}>
                {list.name}
            </Link>
        )}
    </div>
}