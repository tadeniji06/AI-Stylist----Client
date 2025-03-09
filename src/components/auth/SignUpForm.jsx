import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import gsap from "gsap";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
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

const SignUpForm = () => {
  useEffect(() => {
    gsap.set([".form-container", ".form-field", ".submit-button"], {
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(".form-container", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(".form-field", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
      })
      .to(".submit-button", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div className='form-container opacity-0 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Create your account
          </h2>
        </div>
        <Formik
          initialValues={{
            nickname: "",
            email: "",
            password: "",
            age: "",
            country: "",
            state: "",
            favoriteColor: "",
            gender: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className='mt-8 space-y-6'>
              <div className='rounded-md shadow-sm space-y-4'>
                {[
                  { name: "nickname", type: "text", icon: "mdi:account" },
                  { name: "email", type: "email", icon: "mdi:email" },
                  { name: "password", type: "password", icon: "mdi:lock" },
                  { name: "age", type: "number", icon: "mdi:calendar" },
                  { name: "country", type: "text", icon: "mdi:flag" },
                  { name: "state", type: "text", icon: "mdi:city" },
                  {
                    name: "favoriteColor",
                    type: "text",
                    icon: "mdi:palette",
                  },
                ].map((field) => (
                  <div
                    key={field.name}
                    className='form-field opacity-0 relative'
                  >
                    <Icon
                      icon={field.icon}
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl z-10'
                    />

                    <Field
                      name={field.name}
                      type={field.type}
                      className='appearance-none rounded-lg relative block w-full pl-12 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-green focus:border-primary-green z-0 sm:text-sm'
                      placeholder={
                        field.name.charAt(0).toUpperCase() +
                        field.name.slice(1)
                      }
                    />

                    {errors[field.name] && touched[field.name] && (
                      <div className='text-red-500 text-xs mt-1'>
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}

                <div className='form-field opacity-0'>
                  <Field
                    as='select'
                    name='gender'
                    className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary-green focus:border-primary-green focus:z-10 sm:text-sm'
                  >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </Field>
                  {errors.gender && touched.gender && (
                    <div className='text-red-500 text-xs mt-1'>
                      {errors.gender}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Button
                  type='submit'
                  className='submit-button opacity-0 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-green hover:bg-secondary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green'
                  title='Sign Up'
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className=' mt-4'>
          <span className=''>
            Already have an account?{" "}
            <Link to='/signin'>
              <p className='text-primary-green font-bold'>Sign In</p>
            </Link>
          </span>
        </div>{" "}
      </div>
    </div>
  );
};

export default SignUpForm;
