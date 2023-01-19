import {useEffect, useState} from "react";
import api from "../../../services/api";
import {Link} from "react-router-dom";

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);

    async function fetchArticles() {
        const response = await api.get('/posts');

        setArticles(response.data);
    }
    useEffect( () => {
        fetchArticles();
    }, []);

    const deleteArticle = async id => {
        await api.delete(`/posts/${id}`);
        fetchArticles();
    }

    return (
        <div className="container mx-auto">
            <Link to="/posts/create">Add new Article</Link>
            <table className="table-auto">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { articles.map(article => (
                    <tr>
                        <td>{ article.title }</td>
                        <td>
                            <Link to={`/posts/edit/${article.id}`}>Edit</Link>
                        </td>
                        <td>
                            <button onClick={() => deleteArticle(article.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}