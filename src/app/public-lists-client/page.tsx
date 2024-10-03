'use client'
import { useState } from "react"

export default function PublicLists() {
    const [state, setState] = useState(0);

    return <div>
        <h1>Counter</h1>
        {state}
        <button onClick={() => setState(state + 1)}>Click Me</button>
    </div>
}