'use client'
import { useState } from "react"

export const base_url = 'https://my-question-list.onrender.com/api';

type Question = {
    _id: string,
    ownerId: string,
    name: string,
    access: string,
    ownerName: string,
    likes: number
}

export default function PublicLists() {
    const [state, setState] = useState(0);
    // const res = await fetch(`${base_url}/public-lists`);
    // const data: Question[] = await res.json();
    // console.log(data);

    return <div>
        <h1>Public Lists</h1>
        {/* {data.map(question => <div key={question._id}>{question.name}</div>)} */}
        {state}
        <button onClick={() => setState(state + 1)}>Click Me</button>
    </div>
}