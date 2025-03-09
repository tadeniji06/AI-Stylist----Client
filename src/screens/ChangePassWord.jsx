import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import gsap from "gsap";
import toast from 'react-hot-toast';
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

import { resetPassword } from "../functions/authFunctions";
import Button from "../components/ui/Button";

const ChangePasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  otpCode: Yup.string()
    .required("OTP is required")
    .length(6, "OTP must be 6 digits"),
  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "Password too short"),
});

const ChangePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    gsap.set([".change-container", ".form-field"], {
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(".change-container", {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }).to(".form-field", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
    });
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='change-container opacity-0 max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg'>
        <div className='text-center'>
          <Icon
            icon='mdi:shield-lock'
            className='text-6xl text-primary-green mx-auto'
          />
          <h2 className='mt-6 text-3xl font-bold text-gray-900'>
            Set New Password
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Enter the verification code sent to your email
          </p>
        </div>

        <Formik
          initialValues={{
            email: location.state?.email || "",
            otpCode: "",
            newPassword: "",
          }}
          validationSchema={ChangePasswordSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await resetPassword(values.email, values.otpCode, values.newPassword);
              toast.success('Password successfully reset');
              navigate("/signin");
            } catch (error) {
              toast.error(error.response?.data?.message || 'Failed to reset password');
            }
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className='mt-8 space-y-6'>
              {[
                {
                  name: "email",
                  type: "email",
                  icon: "mdi:email",
                  placeholder: "Confirm your email",
                },
                {
                  name: "otpCode",
                  type: "text",
                  icon: "mdi:numeric",
                  placeholder: "Enter 6-digit code",
                },
                {
                  name: "newPassword",
                  type: "password",
                  icon: "mdi:lock",
                  placeholder: "Enter new password",
                },
              ].map((field) => (
                <div key={field.name} className='form-field relative'>
                  <Icon
                    icon={field.icon}
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl z-10'
                  />
                  <Field
                    name={field.name}
                    type={field.type}
                    className='appearance-none rounded-lg block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-primary-green focus:border-primary-green'
                    placeholder={field.placeholder}
                  />
                  {errors[field.name] && touched[field.name] && (
                    <div className='text-red-500 text-xs mt-1'>
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              ))}

              <Button
                type='submit'
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-green hover:bg-secondary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green'
                title='Reset Password'
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
