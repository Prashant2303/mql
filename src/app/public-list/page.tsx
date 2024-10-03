import { base_url } from "@/helper";

type Question = {
    _id: string,
    ownerId: string,
    name: string,
    access: string,
    ownerName: string,
    likes: number
}

export default async function PublicLists() {
    const res = await fetch(`${base_url}/public-lists`);
    const data: Question[] = await res.json();
    // console.log(data);

    return <div>
        <h1>Public Lists</h1>
        {data.map(question => <div key={question._id}>{question.name}</div>)}
    </div>
}