import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import { useFormik } from "formik";
import validate from "../validation/register.js";

export default function Register() {
        const formik = useFormik({
          initialValues: {
            username: "",
            email:"",
            password: ""
          },
          validate: validate,
          validateOnBlur: false,
          validateOnChange: false,
          onSubmit: (values) => {
              console.log(values);
          }
        });
  return (
    <main className="size-ful bg-gray-800 flex items-center justify-center relative">
      <img
        src="/vite.svg"
        alt=""
        className="absolute h-screen w-screen object-cover -z-0"
      />
      <section className="max-h [30rem] h-full max-w-[25rem] w-full bg-gray-600 shadow-lg rounded-md absolute z-10">
        <h2 className="text-center p-8 text-2xl font-bold">
          Signup to Adhigram
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center justify-center flex-col gap-2 w-full"
        >
          <Input
            type="text"
            placeholder="Username"
            {...formik.getfeildProps("email")}
          />
          <article className="text-red-500 text-sm">
            {formik.errors.username}
          </article>
          <Input
            type="email"
            placeholder="email"
            {...formik.getfeildProps("email")}
          />
          <article className="text-red-500 text-sm">
            {formik.errors.email}
          </article>
          <Input
            type="password"
            placeholder="password"
            {...formik.getfeildProps("password")}
          />
          <article className="text-red-500 text-sm">
            {formik.errors.password}
          </article>
          <Button>REGISTER</Button>
          <div className="w-5/h-0.5 bg-black"></div>
          <article>
            Already have an account? <Link to={"/login"}>Login</Link>
          </article>
        </form>
      </section>
    </main>
  );
}
