import React from "react";
import { Icon } from "@iconify/react";
import { socials } from "../utils/data";

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold text-primary-green mb-4'>
              AI Stylist
            </h3>
            <p className='text-primary-grey'>
              Your personal fashion assistant powered by artificial
              intelligence
            </p>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Socials</h4>
            <ul className='space-y-2 text-primary-grey'>
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    className='flex items-center space-x-2'
                  >
                    <Icon
                      icon={social.icon}
                      className='text-primary-grey'
                    />
                    <span className='text-primary-grey'>
                      {social.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

      

          <div>
            <h4 className='font-semibold mb-4'>Newsletter</h4>
            <div className='flex'>
              <input
                type='email'
                placeholder='Enter your email'
                className='px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-green'
              />
              <button className='bg-primary-green text-white px-4 py-2 rounded-r-lg hover:bg-secondary-green transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t text-center text-primary-grey'>
          <p>
            &copy; {new Date().getFullYear()} AI Stylist. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
