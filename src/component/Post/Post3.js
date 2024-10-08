import Comment from "../View/Comment";
const Post3 = () => {
  const post = {
    id: 3,
    title: "bypassing Avon Tasty Plastic Gloves",
    content: `  In commodi quia facilis et quo sunt ut et. Et qui aliquid eos impedit
          et dolorum reprehenderit dolor veritatis. Non ipsa esse aliquam. Aut
          odit debitis exercitationem ullam. Quasi praesentium possimus
          asperiores animi voluptatibus voluptatem sequi dolorem harum. Vel quas
          ipsam quia et quaerat et repellendus ducimus nesciunt. Dolorem
          veritatis et quos facilis. Quibusdam quidem quod. Illum qui quo ut.
          Laudantium et possimus voluptatem dolorem. Velit aliquam similique
          iure eaque ullam nisi accusamus quo. Qui consequatur asperiores harum
          nostrum pariatur qui. Commodi eum velit. Et voluptates dolores
          similique modi in quaerat. Veniam aut voluptate non quod ad maiores
          reiciendis aut aut. Sit laborum dolor. Et ex dignissimos. Quis sit
          quisquam. Temporibus id facere dolores veritatis repudiandae dolorem
          autem molestiae. Esse quaerat et omnis accusantium. Numquam natus
          reiciendis sint molestiae eos quis.`,
    date: "2/11/2018",
    like: 3,
  };
  return (
    <>
      <div className="Post3">
      <h1>{post.title}</h1>
        <p>{post.content} </p>
        <p>Date:{post.date}</p>
        <p>Like:{post.like} </p>
      </div>
      <div>
        <Comment postId={post.id}/>
      </div>
    </>
  );
};
export default Post3;
