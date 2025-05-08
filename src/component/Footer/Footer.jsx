import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiEventstore } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="px-4 divide-y mt-10 bg-gray-200 text-black">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3 ml-1">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center">
					<span className='text-amber-500  text-4xl'> <SiEventstore /> </span>
                    <span className="flex text-3xl font-bold  text-violet-700">Fusion<span className='text-amber-600'>S</span>phere</span>
				</div>
				
			</a>
		</div>
		<div className="flex text-sm gap-10 justify-between gap-y-8 lg:w-2/3  ">
		

			


			<div className='mx-12 px-20'>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">

		

            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline hover:text-violet-600">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:underline hover:text-violet-600">Contact Us</a></li>
          </ul>
        </div>
		
		<div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" title="Facebook" className=" hover:text-violet-500">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" title="Twitter" className=" hover:text-violet-500">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" title="Instagram" className=" hover:text-violet-500">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-600">© 1968 Company Co. All rights reserved.</div>
</footer>
    );
};

export default Footer;