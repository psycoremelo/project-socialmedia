export default function Button(props) {
  return(
    <article className="w-5/6">
      <button {...props} className="h-10 w-full bg-gry-900 rounded-md text-white my-2">{props.children}</button>
    </article>
  );
}