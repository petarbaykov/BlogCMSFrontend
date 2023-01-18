import api from "../services/api";
import {useEffect, useState} from "react";
import ArticleCard from "../components/Blog/ArticleCard";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
            {posts.map(post => (<ArticleCard post={post} />))}
        </div>
    );
}