import { useFormik } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import Validate from "../validation/register";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    Validate: Validate,
    ValidateOnBlur: false,
    ValidateOnChange: false,
    onsubmit:(values) => {
      let res = axios.post("/api/login", values);
      toast.promise(res, {
        loading: "Logging in...",
        success: (res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          navigate("/",{ replace: true});
          return "Login success!";
        },
        error: "Login!"
      })
    }
  });
  return(
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
          type="password"
          placeholder="password"
          {...formik.getfeildProps("password")}
        />
        <article className="text-red-500 text-sm">
          {formik.errors.password}
        </article>
        <Button>LOGIN</Button>
        <div className="w-5/h-0.5 bg-black"></div>
        <article>
          Dont have an account? <Link to={"/register"}>Signup</Link>
        </article>
      </form>
    </section>
  </main>
  );
}