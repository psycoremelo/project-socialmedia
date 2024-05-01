export default function Input(props) {
  return (
    <article classsname="w-5/6">
      <input {...props} classsname="h-10 w-full rounded-md outline-none px shadow-md focus:shadow-blue-700 my-2" />
    </article>
  );
}