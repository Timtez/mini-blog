import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("timmy");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);
        
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("one blog added");
            setIsLoading(false);
            navigate("/");
        });
    }

    return (
        <div className="create">
            <h2>Create Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text" 
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content</label>
                <textarea
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    required
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="timmy">Timmy</option>
                    <option value="pablo">Pablo</option>
                </select>
                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;