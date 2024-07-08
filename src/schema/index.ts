import * as z from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address!",
    }),
    name: z.string().min(1, {
      message: "Please enter your name",
    }),
    password: z.string().min(6, {
      message: "Password must be atleast 6 characters long",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be atleast 6 characters long",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address!",
  }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters long",
  }),
});

export const ProfileSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address!",
  }),
  phoneNumber: z
    .number()
    .min(10, {
      message: "Country code must exactly be 10 numbers",
    })
    .max(10, {
      message: "Country code must exactly be 10 numbers",
    }),
});
