export default function EditProfile() {
  return(
    <main className="flex justify-center">
    <main className="h=full w-full lg:w-[40rem]">
      <section className="flex justify-between ">
        <button className="">Cancel</button>
        <p className="font-bold">Edit profile</p>
        <button className="text-blue-400">Done</button>
      </section>
      <section className="h-full w-full p-10 flex justify-center">
        <div className="h-full aspect-square p-2 relative"> 
        <div className="h-full w-full rounded-full bg-gray-500"></div>
        <button className=" text-blue-400">Change profie photo</button>
        </div>
      </section>
      <form>
        <label htmlFor="">Name </label>
        <input type="text" />
        <br />
        <label htmlFor="">Username </label>
        <input type="text" />
        <br />
        <label htmlFor="">pronounce </label>
        <input type="text" />
        <br />
        <label htmlFor="">Bio </label>
        <input type="text" />
        <br />
        <label htmlFor="">links </label>
        <input type="link" />
      </form>
    </main>
    </main>
  )
}