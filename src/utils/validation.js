import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
 email: Yup.string()
   .email("Invalid email address")
   .required("Email is required"),
 password: Yup.string().required("Password is required"),
});

export const SignUpSchema = Yup.object().shape({
 nickname: Yup.string().required("Nickname is required"),
 email: Yup.string().email("Invalid email").required("Email is required"),
 password: Yup.string()
   .min(5, "Too short!")
   .required("Password is required"),
 age: Yup.number()
   .required("Age is required")
   .positive("Must be a valid age"),
 country: Yup.string().required("Country is required"),
 state: Yup.string().required("State is required"),
 favoriteColor: Yup.string().required("Favorite color is required"),
 gender: Yup.string().required("Gender is required"),
});