import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <section className="h=full w-full lg:w-[40rem]">
      <article className="h-40 w-full p-4 flex">
        <div className="h-full aspect-square p-2 relative">
          <div className="h-full w-full rounded-full bg-gray-400"></div>
          <div className="size-6 rounded-full bg-blue-600 flex items-center justify-center text-lg text-white absolute right-4 buttom-4"></div>
        </div>
        <div className="h-full flex-grow flex">
          <section className="h-full flex-grow flex items-center justify-center flex-col">
            <div className="font-bold">1001</div>
            <p className="text-gray-500">Post</p>
          </section>
          <section className="h-full flex-grow flex items-center justify-center flex-col">
            <div className="font-bold">250k</div>
            <p className="text-gray-500">Followers</p>
          </section>
          <section className="h-full flex-grow flex items-center justify-center flex-col">
            <div className="fond-bold">2002</div>
            <p className="text-gray-500">Following</p>
          </section>
        </div>
      </article>
      <article>Bio</article>
      <article className="w-full h-10 px-2 flex flex-row gap-2">
        <button
          className="flex-grow bg-gray-400 rounded-md"
          onClick={() => navigate("/edit-profile")}
        >
          Edit profile
        </button>
        <button className="flex-grow bg-gray-400 rounded-md">
          Share profile
        </button>
      </article>
    </section>
  );
}
