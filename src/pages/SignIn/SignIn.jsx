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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const { signInUser } = useAuth();

  const handleSignIn = async (data) => {
    signInUser(data?.email, data?.password)
      .then((result) => {
        reset();
        toast.success("Successfully Logged In!");
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };
  return (
    <section className="bg-[#3f4079] bg-[url('https://www.ansonika.com/findoctor/menu_2/img/hero_bg_1.svg')] bg-fixed py-40 flex justify-center items-center">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Card className="w-96 mt-40">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-8">
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
            <Button variant="gradient" fullWidth type="submit">
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link to="/sign-up">
                <Typography
                  as="a"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
};

export default SignIn;
