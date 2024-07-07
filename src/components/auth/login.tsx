import CardWrapper from "./CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { useForm } from "react-hook-form";
import { LoginSchema } from "../../schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useRecoilState, useRecoilValue } from "recoil";
import { authButtonLoading } from "../../state/atoms/globalAtoms";
import { isAuthButtonLoading } from "../../state/selectors/globalSelectors";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { auth } from "../../lib/helper/supabaseClient";
import { useCallback } from "react";
import { Provider } from "@supabase/supabase-js";

const LoginForm = () => {
  const [, setAuthButtonLoading] = useRecoilState(authButtonLoading);
  const loading = useRecoilValue(isAuthButtonLoading);
  const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL;

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setAuthButtonLoading(true);
    console.log("Submitted", data);
  };

  const onOAuthClick = useCallback(
    async (provider: Provider) => {
      const res = await auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${siteUrl}/dashboard`,
        },
      });
      console.log("res", res);
    },
    [siteUrl]
  );

  return (
    <CardWrapper
      title="Login"
      label="Log in to account"
      cardToRender={1}
      backButtonLabel={`Don't have an account?
        Register here using email.`}
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
          </div>
          <Button type="submit" className="w-full">
            {loading ? "loading..." : "Login"}
          </Button>
        </form>
      </Form>
      <div className="flex flex-col gap-2 p-4 mt-8 border-y border-y-[1px]">
        <Button
          onClick={() => onOAuthClick("google")}
          variant="secondary"
          type="button"
          className="flex w-full justify-center items-center gap-2 font-bold border border-gray-200"
        >
          <FcGoogle /> Google
        </Button>
        <Button
          onClick={() => onOAuthClick("github")}
          variant="secondary"
          type="button"
          className="flex w-full justify-center items-center gap-2 font-bold border border-gray-200"
        >
          <FaGithub /> GitHub
        </Button>
      </div>
    </CardWrapper>
  );
};

export default LoginForm;
