function Post({ title, body }) {
  return (
    <div style={{width:"fit-Content", height:'fit-content', padding:"20px"}}>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
