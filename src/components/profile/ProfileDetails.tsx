import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "../../schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useAuth } from "../../hooks/Auth";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ProfileDetails = () => {
  const { user } = useAuth();
  const name = user?.user_metadata?.name
    ? `${user?.user_metadata?.name}`
    : "no-name";
  const email = user?.email ?? "johndoe@gmail.com";
  const phoneNumber = user?.phone ?? "0000000000";
  const userImage =
    user?.user_metadata.avatar_url ??
    user?.user_metadata.picture ??
    "https://github.com/shadcn.png";

  const form = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "0000000000",
    },
  });

  const onSubmit = () => {
    console.log("Submitted");
  };
  return (
    <div className="p-12">
      <Card className="w-3/5 m-auto p-10 pt-0">
        <CardHeader className="text-center bg-gradient-to-r from-white via-gray-400 to-gray-white mb-6">
          <CardTitle className="text-2xl">Profile Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full justify-center items-center mb-12 relative">
            <Avatar className="w-32 h-32">
              <AvatarImage src={userImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="capitalize border p-1 rounded-full text-xs absolute bottom-0 bg-gray-400 font-medium cursor-pointer">
              Update image
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="gap-4">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder={name} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder={email} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder={phoneNumber}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 items-start">
          <Button type="button" className="w-full capitalize font-bold">
            Update
          </Button>
          <CardDescription>
            Fill in the form and click update for updating profile details!
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfileDetails;
