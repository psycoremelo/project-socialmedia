import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import { useFormik } from "formik";
import validate from "../validation/register.js";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      let { cpassword, ...rest } = values;
      let res = axios.post("/api/register", rest);
      toast.promise(res, {
        loading: "Registering...",
        success: () => {
          navigate("/login", { replace: true });
          return "Registeration successful";
        },
        error: "Registeration failed",
      });
    },
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
            {...formik.getFieldProps("username")}
          />
          <article className="text-red-500 text-sm">
            {formik.errors.username}
          </article>
          <Input
            type="email"
            placeholder="email"
            {...formik.getFieldProps("email")}
          />
          <article className="text-red-500 text-sm">
            {formik.errors.email}
          </article>
          <Input
            type="password"
            placeholder="password"
            {...formik.getFieldProps("password")}
          />
          <Input
            type="password"
            placeholder="confirm password"
            {...formik.getFieldProps("cpassword")}
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
