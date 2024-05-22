function Post({ first_name, last_name, avatar, email }) {
  return (
    <div style={{width:"fit-Content",textAlign:"center", height:'240px', padding:"10px", borderRadius:"10px", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
      <img src={avatar} alt="avatar" style={{borderRadius:"10px",padding:"10px", backgroundColor:'lightcyan'}} />
      <p>Name : {first_name} {last_name}</p>
      <p>email : {email}</p>
    </div>
  );
}

export default Post;
