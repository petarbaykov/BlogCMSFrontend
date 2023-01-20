import Form from "../Form/Index";
import api from "../../../services/api";
import {useNavigate} from "react-router-dom";

export default function ArticleCreate() {
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        const response = await api.post('/posts', data);

        if (response.status === 200) {
            navigate("/posts");
        }
    }

    return (
        <div>
            <Form submitHandler={submitHandler} />
        </div>
    );
}