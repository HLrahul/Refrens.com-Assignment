import { useParams } from "react-router";

export default function ProfilePage() {
    const { id } = useParams();

    return (
        <div>
        <h1>Profile Page of character {id}</h1>
        </div>
    );
}