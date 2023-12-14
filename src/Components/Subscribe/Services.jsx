import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

export default function Services() {
  return (
    <div className="container bg-black text-white mb-8 md:mb-12 lg:mb-16">
      <div className="flex flex-col md:flex-row justify-between items-center mt-11 mb-4">
        <div className="mb-6 md:mb-0 ml-[20px] mt-[20px]">
          <a href="/">
            <img
              src="https://pixner.net/boleto/demo/assets/images/footer/footer-logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="mb-6 md:mb-0 mt-[20px] mr-[30px]">
          <ul className="flex space-x-4">
            <li className="rounded-full bg-[#31d7a9] w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebookF} className="text-white" />
            </li>
            <li className="rounded-full bg-[#31d7a9] w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </li>
            <li className="rounded-full bg-[#31d7a9] w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} className="text-white" />
            </li>
            <li className="rounded-full bg-[#31d7a9] w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faLinkedin} className="text-white" />
            </li>
            <li className="rounded-full bg-[#31d7a9] w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faPinterest} className="text-white" />
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-solid-[1px] w-2/3 mx-auto" />
      <div className="flex flex-col md:flex-row items-center md:items-start px-[4px]">
        {/* <hr className="md:hidden w-2/3 mx-auto border-t border-gray-300 my-4" /> */}
        <div className="mb-4 md:mb-0 mt-[20px] ml-[30px] ">
          <p className="text-sm">
            Copyright © 2020. All Rights Reserved By{' '}
            <a
              href="https://demo1.cybersoft.edu.vn/"
              className="text-title-main"
            >
              Cyber
            </a>
          </p>
        </div>
        <div className="md:ml-auto mt-[16px] mr-[30px] mb-4 ">
          <ul className="flex space-x-4 mt-4 md:mt-0 ">
            <li className="hover:text-[#31d7a9]">
              <a href="">About</a>
            </li>
            <li className="hover:text-[#31d7a9]">
              <a href="">Terms Of Use</a>
            </li>
            <li className="hover:text-[#31d7a9]">
              <a href="">Privacy Policy</a>
            </li>
            <li className="hover:text-[#31d7a9]">
              <a href="">FAQ</a>
            </li>
            <li className="hover:text-[#31d7a9]">
              <a href="">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="mb-4"></div>
      </div>
    </div>
  );
}
