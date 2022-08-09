import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {

    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
    
        return (
            <div className="home">
                {error && <div className="error">{error}</div>}
                {isLoading && <div className="loading">This may take a while, loading...</div>}
                {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
            </div>
        );
}
 
export default Home;