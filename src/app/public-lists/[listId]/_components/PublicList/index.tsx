'use client'

import { List } from "@/types"

export function PublicListClient({ list }: { list: List }) {

    return <div>
        <ol>{list.questions.map(question => <li key={question.id}>{question.name}</li>)}</ol>
    </div>
}