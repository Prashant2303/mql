import { base_url, List } from "..";

export default function PublicList(list: List) {
    console.log('CLIENT', list.questions.length);

    return <div><h1>Public List</h1>
        <h2>List Id: {list._id}</h2>
        <h2>List Name: {list.name}</h2>
        {list.questions.map(question => <div key={question.id}>{question.name}</div>)}
    </div>
}

export async function getStaticPaths() {
    const res = await fetch(`${base_url}/public-lists`);
    const lists: List[] = await res.json();
    const paths = lists.map(list => ({
        params: { listId: list._id }
    }))
    return {
        paths,
        fallback: false
    }
}

type Params = {
    params: {
        listId: string
    }
}

export async function getStaticProps({ params }: Params) {
    const res = await fetch(`${base_url}/public-lists/${params.listId}`);
    const list = await res.json();
    console.log('LIST ON SERVER', list.questions.length);

    return {
        props: list,
        revalidate: 60
    }
}