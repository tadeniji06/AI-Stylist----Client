import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignInForm = () => {
  useEffect(() => {
    gsap.set([".login-container", ".form-field", ".login-button"], {
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(".login-container", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(".form-field", {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
      })
      .to(".login-button", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div className="login-container opacity-0 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ready to style your day?
          </p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md space-y-4">
                {[
                  { name: "email", type: "email", icon: "mdi:email" },
                  { name: "password", type: "password", icon: "mdi:lock" },
                ].map((field) => (
                  <div key={field.name} className="form-field opacity-0 relative">
                    <Icon
                      icon={field.icon}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl z-10"
                    />
                    <Field
                      name={field.name}
                      type={field.type}
                      className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-green focus:border-primary-green z-0 sm:text-sm"
                      placeholder={
                        field.name.charAt(0).toUpperCase() + field.name.slice(1)
                      }
                    />
                    {errors[field.name] && touched[field.name] && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary-green focus:ring-primary-green border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary-green hover:text-secondary-green"
                >
                  Forgot your password?
                </Link>
              </div>

              <div>
                <Button
                  type="submit"
                  className="login-button opacity-0 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-green hover:bg-secondary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green"
                  title="Sign In"
                />
              </div>

              <p className="text-center text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-green hover:text-secondary-green"
                >
                  Sign up now
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
