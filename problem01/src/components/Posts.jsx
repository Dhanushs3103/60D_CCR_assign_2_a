import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://reqres.in/api/users`,
      });
      setLoading(false);
      setPosts(res?.data?.data);
      // console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData} style={{padding:"10px", fontFamily:"poppins,sanSerif", fontSize:'20px', border:"0", cursor:"pointer", backgroundColor:"lightblue", color:"white", fontWeight:"bold", borderRadius:"10px", marginBottom:"20px"}}>
        Click to display list of posts
      </button>
      {/*mapping over the posts*/}
      <div style={{display:"flex",justifyContent:"center", gap:"20px"}}>
        {posts?.map((post, id) => {
          return (
            <Post
              key={id}
              first_name={post.first_name}
              last_name={post.last_name}
              avatar={post.avatar}
              email={post.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
