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

            <Link
                to="/posts/create"
                className="text-white inline-block my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Add new Article
            </Link>
            <br />
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" colSpan="2" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        { articles.map(article => (
                            <tr key={article.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    { article.title }
                                </td>
                                <td className="px-6 py-4">{ article.category.name }</td>
                                <td className="px-6 py-4" colSpan="2">
                                    <Link
                                        to={`/posts/edit/${article.id}`}
                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteArticle(article.id)}
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}