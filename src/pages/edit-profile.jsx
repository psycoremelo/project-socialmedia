export default function EditProfile() {
  return(
    <main className="h=full w-full ">
      <section className="flex justify-between ">
        <button>Cancel</button>
        <p>Edit profile</p>
        <button>Done</button>
      </section>
      <section className="h-full w-full p-4 flex justify-center">
        <div className="h-full aspect-square p-2 relative"> 
        <div className="h-full w-full rounded-full bg-gray-500"></div>
        <p className="font-bold text-blue-400 pt-10">Change profile photo</p>
        </div>
      </section>
    </main>
  )
}