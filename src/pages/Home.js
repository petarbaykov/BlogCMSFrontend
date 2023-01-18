import api from "../services/api";
import {useEffect, useState} from "react";

export default function Home () {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        async function fetchPosts() {
            const response = await api.get('/posts');

            setPosts(response.data);
        }
        fetchPosts();
    }, []);

    return (
        <div>
            {
                posts.map(post => (
                    <div>
                        {post.title}
                    </div>
                ))
            }
        </div>
    );
}