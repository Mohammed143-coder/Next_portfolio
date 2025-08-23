import React from "react";
import { useState } from "react";
import { LuSend } from "react-icons/lu";
import confetti from "canvas-confetti";
const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86b6c5f7-6c1a-4680-879f-bf491af41670");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
     // 🎉 Trigger confetti
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
      });
      event.target.reset();
      setResult("")
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="mt-8 md:mt-12 mx-4 p-6 bg-[#0d1117]  text-gray-200 rounded-xl border">
      <h2 className="text-2xl font-bold mb-4 text-center ">
        🚀 Let’s Connect!
      </h2>
      <p className="text-center  mb-6">
        Have a project idea or want to connect ? Fill in the form below 👇
      </p>

      <form onSubmit={onSubmit} className="space-y-4 text-lg">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          rows="4"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>

        <button
          type="submit"
          className="flex gap-3 justify-center items-center w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-xl text-white py-3 rounded-lg font-semibold transition"
        >
          Send Message <LuSend />
        </button>
      </form>

      {result && (
        <p className="mt-4 text-center text-sm text-gray-300">{result}</p>
      )}
    </div>
  );
};

export default ContactForm;
