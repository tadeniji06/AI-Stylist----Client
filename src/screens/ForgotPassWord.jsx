import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const EmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    gsap.set(".forgot-container", {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline();

    tl.to(".forgot-container", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='forgot-container opacity-0 max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg'>
        <div className='text-center'>
          <Icon
            icon='mdi:lock-reset'
            className='text-6xl text-primary-green mx-auto'
          />
          <h2 className='mt-6 text-3xl font-bold text-gray-900'>
            Reset Password
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Enter your email to receive a verification code
          </p>
        </div>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={EmailSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setEmailSent(true);
            setSubmitting(false);
            navigate("/change password", {
              state: { email: values.email },
            });
          }}
        >
          {({ errors, touched }) => (
            <Form className='mt-8 space-y-6'>
              <div className='relative'>
                <Icon
                  icon='mdi:email'
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl z-10'
                />
                <Field
                  name='email'
                  type='email'
                  className='appearance-none rounded-lg block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-primary-green focus:border-primary-green'
                  placeholder='Enter your email'
                />
                {errors.email && touched.email && (
                  <div className='text-red-500 text-xs mt-1'>
                    {errors.email}
                  </div>
                )}
              </div>

              <Button
                type='submit'
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-green hover:bg-secondary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green'
                title='Send Reset Code'
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
