export default function PublicList({ params }: { params: { listId: string } }) {
    return <div>My List: {params.listId}</div>
}