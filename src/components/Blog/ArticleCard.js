import {Link} from "react-router-dom";

export default function ArticleCard({ post }) {
    return (
        <div className="max-w-lg mx-auto article-card">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <Link to={`/posts/${post.id}`} className="image-wrapper">
                    <img className="rounded-t-lg" src={`http://localhost:8080/images/${post.image}`} alt="" />
                    <span className="category bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{post.category.name}</span>
                </Link>
                <div className="p-5">
                    <Link to={`/posts/${post.id}`}>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
                    </Link>

                    <p dangerouslySetInnerHTML={{ __html: post.content }}className="h-5 font-normal text-gray-700 mb-3" />
                    <Link to={`/posts/${post.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}