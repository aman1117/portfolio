import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-2 mb-10 w-full h-full flex flex-col">
      <p className="text-4xl font-bold mb-3 mr-1">Contact Me</p>
      <div className="mb-4">
        <p className="md:text-lg">
          <strong>Email:</strong> <a href="mailto:arl0817osho@gmail.com" className="text-indigo-900 underline underline-offset-2">arl0817osho@gmail.com</a>
        </p>
        <p className="md:text-lg">
          <strong>Contact Number:</strong> <a href="tel:+919873453266" className="text-indigo-900 underline underline-offset-2">+91 9873453266</a>
        </p>
        <p className="md:text-lg">
          <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/aman1117/" target="_blank" className="text-indigo-900 underline underline-offset-2">aman1117</a>
        </p>
      </div>
    </div>
  );
};


export default ContactPage;