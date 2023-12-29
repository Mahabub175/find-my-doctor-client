/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { base_url } from "../../utils/config";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    registerUser(data?.email, data?.password)
      .then(async (result) => {
        try {
          const body = {
            name: data?.name,
            email: result?.user?.email,
            role: "user",
          };
          await axios.post(`${base_url}/users`, body);
        } catch (error) {
          console.error("Error adding user:", error.message);
        }

        reset();
        toast.success("Successfully Signed Up!");
        navigate("/sign-in");
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };
  return (
    <section className="bg-[#3f4079] bg-[url('https://www.ansonika.com/findoctor/menu_2/img/hero_bg_1.svg')] bg-fixed py-40 flex justify-center items-center">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Card className="w-96 mt-20">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-6 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-8">
            <Input
              label="Name"
              size="lg"
              type="text"
              {...register("name")}
              required
            />
            <Input
              label="Email"
              size="lg"
              type="email"
              {...register("email")}
              required
            />
            <Input
              label="Password"
              size="lg"
              type="password"
              {...register("password")}
              required
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth type="submit">
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
};

export default SignUp;
