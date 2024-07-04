import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useRecoilState, useRecoilValue } from "recoil";
import { authButtonLoading } from "../../state/atoms/globalAtoms";
import { isAuthButtonLoading } from "../../state/selectors/globalSelectors";
import { auth } from "../../lib/helper/supabaseClient";

const RegisterForm = () => {
  const [, setAuthButtonLoading] = useRecoilState(authButtonLoading);
  const loading = useRecoilValue(isAuthButtonLoading);

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setAuthButtonLoading(true);
    console.log("Submitted", data);
    // signUp();
  };

  async function signUp() {
    const { data, error } = await auth.signUp({
      email: "akshay5632@gmail.com",
      password: "testpassword",
    });

    console.log("Sign up", data, error);
    setAuthButtonLoading(false);
  }

  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      cardToRender={0}
      backButtonLabel="Already have an account? Login here"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            {loading ? "loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
