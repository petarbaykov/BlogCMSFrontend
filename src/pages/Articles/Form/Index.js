import React, {useState, useRef} from "react";
import { Editor } from '@tinymce/tinymce-react';
import api from "../../../services/api";

export default function ArticleForm({ article, submitHandler }) {
    console.log(article);
    const [title, setTitle] = useState(article?.title || '');
    const [category, setCategory] = useState(article?.category || '1');
    const [image, setImage] = useState({});
    const editorRef = useRef(null);

    const submit = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (!image?.name) {
            data.delete("image");
        }
        data.append("content", editorRef.current.getContent());

        submitHandler(data);
    }

    return (
        <div className="container mx-auto">
            <form onSubmit={submit}>
                <div className="my-5">
                    <label htmlFor="title" className="sr-only">Title</label>
                    <input id="title"
                           name="title"
                           type="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                           placeholder="Title" />
                </div>
                <div className="my-5">
                    <label htmlFor="title" className="sr-only">Content</label>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={article?.content}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="category" className="sr-only">Category</label>
                    <select
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option value="1">Tech</option>
                        <option value="2">Drones</option>
                        <option value="3">Business</option>
                        <option value="4">Education</option>
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="image" className="sr-only">Image</label>
                    <input id="image"
                           name="image"
                           type="file"
                           onChange={(e) => setImage(e.target.files[0])}
                           className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                           placeholder="Image" />
                </div>
                <div>
                    <button type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};