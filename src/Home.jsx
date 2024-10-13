import BlogList from "./Bloglist.jsx"
import useFetch from "./useFetch.js"

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("https://670912b1af1a3998baa0475b.mockapi.io/blogs/")
    return (
        <>
            <div className="home">
                {isPending && <h2>Loading....</h2>}
                {error && <h2>Error Message: {error}</h2>}
                {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            </div>
        </>
    )
}

export default Home