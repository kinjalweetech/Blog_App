import Comment from "../View/Comment";
const Post2 = () => {
  const post = {
    id: 2,
    title: "car",
    content: `  Ut tempora a enim necessitatibus atque voluptatem nulla placeat.
          Architecto provident beatae cum et sint incidunt dignissimos. Adipisci
          qui dicta saepe optio sit qui est et delectus. Est suscipit rem
          sapiente sed est. Et reprehenderit assumenda. Consectetur ex aut odio
          est est harum quia ut. Nihil quia et animi sequi. Mollitia omnis at
          molestias unde non expedita et aperiam et. Dolor praesentium itaque
          rerum quis vitae. Id libero dicta id molestias dicta ut. Sunt incidunt
          rerum aspernatur ea eligendi doloremque accusantium maiores magni.
          Quis tempore quae dolorum est ipsam quas mollitia dolorem officiis. Et
          corporis placeat. Quis praesentium temporibus sed impedit rerum libero
          aut voluptate. Ipsa iste veniam. Quo quasi dolores dolores. In placeat
          ut officiis quia dolores voluptate illum. Laboriosam labore aut totam
          temporibus veniam iste eligendi. Illum quia omnis est soluta dolores
          illo eligendi officia. Iure inventore minus fugit sit et est optio.
          Fugit fugiat consequatur adipisci nulla ducimus. Placeat saepe quis
          quis nobis in voluptas. Incidunt repellat reprehenderit vitae hic est
          sapiente. Pariatur quibusdam et voluptatem et iste dicta mollitia
          repellendus. Consequatur modi hic. Fuga dolor autem omnis incidunt
          voluptas quis dolor eum. Non et quia vel excepturi veniam.`,
    date: "17/2/2020",
    like: 3,
  };
  return (
    <>
      <div className="Post2">
        <h1>{post.title}</h1>
        <p>{post.content} </p>
        <p>Date:{post.date}</p>
        <p>Like:{post.like} </p>
      </div>

      <div>
        <Comment postId={post.id} />
      </div>
    </>
  );
};
export default Post2;
