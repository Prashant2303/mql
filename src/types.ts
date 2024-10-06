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