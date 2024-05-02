export default function Posts() {
  let posts = new Array(10).fill("Post");
  return (
    <section className="h-full w-full lg:w[40rem]">
      {posts.map((item, index) => {
        <article key={index} className="">
          <div className="h-12 bg-gray-500"></div>
          <div className="w-fill aspect-square bg-black">asdfg</div>
          <div className="h-8 w-full bg-red-600"></div>
          <div className="w-fill">description</div>
          {item}
        </article>;
      })}
    </section>
  );
}
