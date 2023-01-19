import {useEffect, useState} from "react";
import api from "../services/api";
import {useParams} from "react-router-dom";

export default function Article(props) {
    const [article, setArticle] = useState({});
    const params = useParams();
    useEffect(() => {
        async function getArticle() {
            const response = await api.get(`/posts/${params.id}`);
            setArticle(response.data);
        }
        getArticle();
    }, []);

    return (
        <div className="container !pt-0 article">
            <div className="mx-auto ">
                <h1 className="max-w-screen-md mx-auto mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl">
                    {article.title}
                </h1>
                <div className="text-center">
                    <img className="rounded-lg" src={`http://localhost:8080/images/${article.image}`} alt="" />
                </div>



                <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                    <div className="flex items-center gap-3">
                        <div className="relative flex-shrink-0 w-10 h-10">

                        </div>
                        <div>
                            <p className="text-gray-800 dark:text-gray-400">

                            </p>
                            <div className="flex items-center space-x-2 text-sm">
                                <time
                                    className="text-gray-500 dark:text-gray-400"
                                    dateTime={article.createdAt}
                                >
                                    {article.createdAt}
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article dangerouslySetInnerHTML={{ __html: article.content }} className="max-w-screen-md mx-auto" />
        </div>
    );
}