import Form from "../Form/Index";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../../../services/api";

export default function ArticleEdit() {
    const [article, setArticle] = useState({});
    const params = useParams();
    useEffect(() => {
        async function getArticle() {
            const response = await api.get(`/posts/${params.id}`);
            setArticle(response.data);
        }
        getArticle();
    }, []);

    const submitHandler = async (data) => {
        const response = await api.put(`/posts/${params.id}`, data);
    }

    return (
        <div>
            {article.id ? <Form article={article} submitHandler={submitHandler} /> : 'Loading...' }

        </div>
    );
}