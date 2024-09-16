import Comment  from "../View/Comment";
const Post1 = () => {

  const post = {
    id: 1,
    title: "infrastructure Rubber generate",
    content: ` Ullam qui id qui asperiores qui in. Illum praesentium itaque magnam
          nihil qui cumque blanditiis unde asperiores. Ab labore id beatae. Quos
          et hic corporis. Et laborum eveniet aut at nihil quisquam ratione et.
          Vero at accusamus praesentium velit tempora nihil ut aut. Sit suscipit
          et iste maiores quo incidunt neque. Officia officiis accusamus
          molestiae iusto in dolores sunt. Quos ea laudantium quod mollitia.
          Omnis est eos et corrupti aperiam voluptatem assumenda excepturi. Est
          ipsam illum nulla nesciunt voluptatum aut et. Ex nihil officia aut
          expedita et accusantium consequatur est. Deserunt sunt et sint.
          Consequuntur porro ut. Vero unde at similique libero. Non repellat
          odit id deleniti deleniti qui et doloribus qui. Consectetur dolor sed.
          Eum et et ad quas. Eum voluptates maiores possimus et delectus
          incidunt ut atque a. Itaque harum iusto ducimus architecto impedit
          iste voluptatem aliquid. Et est libero doloribus et aut eos. Quas
          voluptatem hic cumque nihil a quis sunt.`,
    date: "12/12/2019",  
    like: 2,
  }
  return (
    <>
      <div className="post1">
        <h1>{post.title}</h1>
        <p>{post.content} </p>
        <p>Date:{post.date}</p>
        <p>Like:{post.like} </p>
      </div>
      <div>
        <Comment postId = {post.id}/>
      </div>
      
    </>
  );
};
export default Post1;
