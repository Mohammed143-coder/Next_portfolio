"use client";
import ContactForm from "@/components/ContactForm";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <main className="block md:flex text-2xl w-full md:w-[80vw] h-full md:h-screen bg-[#0d1117] text-white ">
      <section className="w-full md:w-1/2 p-1 md:p-3 flex flex-col justify-center mt-12">
        <div className="ml-4">
          {" "}
          <h1 className="text-4xl md:text-5xl my-6 text-blue-400 font-semibold">
            Get In to touch
          </h1>
          <p className="text-lg my-4 font-medium">
            Juat a form way ! Drop your message !
          </p>
          <p className="my-4 flex items-center gap-3 ">
            {" "}
            <MdOutlineMarkEmailUnread className="w-9 h-9 rounded-lg p-1 bg-white/15 text-purple-400 shadow-md" />
            <span className="text-lg">junaithdedhai2001@gmail.com</span>
          </p>
          <p className="my-4 flex items-center gap-3">
            <SlLocationPin className="w-9 h-9 bg-white/15 text-green-500 rounded-lg p-1" />
            <span className="text-lg">Krishnagiri, Tamilnadu - 635001</span>
          </p>
        </div>
      </section>
      <section className="w-full md:w-1/2 p-1 md:p-3">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
