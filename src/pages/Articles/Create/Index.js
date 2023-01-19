import Form from "../Form/Index";
import api from "../../../services/api";

export default function ArticleCreate() {

    const submitHandler = async (data) => {
        const response = await api.post('/posts', data);
    }

    return (
        <div>
            <Form submitHandler={submitHandler} />
        </div>
    );
}