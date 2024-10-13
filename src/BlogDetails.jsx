import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch (`https://670912b1af1a3998baa0475b.mockapi.io/blogs/${id}`);

const navigate = useNavigate()
const handleDelete = async () => {
    await fetch("https://670912b1af1a3998baa0475b.mockapi.io/blogs/" + id, {
        method:"DELETE",
    })

    navigate("/")
}

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
