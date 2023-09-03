'use client';

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const formInput = ['name', 'email'];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMsg, setFormMsg] = useState('');

  const validateEmail = (email: string) => {
    const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return EMAIL_REGEX.test(email);
  }

  const handleFormInputChange = ({ name, value }: { name: string, value: string }) => {
    setFormData({...formData, [name]: value});
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateEmail(formData.email)) {
      fetch('/api/contact', { method: 'post', body: JSON.stringify(formData) })
      .then(response => response.json())
      .then((data: { message: string }) => {
        setFormMsg(data.message);
        setFormData({ name: '', email: '', message: '' });
      });
    } else {
      setFormMsg('Email inválido!');
    }
  
    const SEVEN_SECONDS = 7000;
    setTimeout(() => setFormMsg(''), SEVEN_SECONDS);
  }

  return (
    <section className="w-[100%] h-[760px] flex items-center flex-col">
      <h1 className="text-[1.5rem] sm:text-[1.7rem] italic font-semibold scroll-mt-20" id="contact">
        Contato
      </h1>

      <span className="mt-1 mb-8 text-sm italic text-center px-2">
        Você pode entrar em contato pelo formulário ou enviar um email direto para <strong>arthurjr.dev@gmail.com</strong>
      </span>

      <form
        className=" flex flex-col items-center justify-around w-[90%] md:w-[50%] h-[600px] py-3 bg-primary-color rounded-2xl shadow-md shadow-slate-400"
        onSubmit={(e) => handleFormSubmit(e) }
      >
        {formInput.map((field) => (
          <label
          key={field}
          htmlFor={`form-${field}`}
          className="flex flex-col items-center justify-between w-[80%] h-20 font-semibold italic"
          >
            {field.toUpperCase()}
            <input
              className="w-[100%] p-3 rounded-xl"
              type="text"
              id={`form-${field}`}
              placeholder={`Your ${field}`}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={(e) => handleFormInputChange(e.target)}
              required
            />
          </label>
        ))}

        <label
          htmlFor="form-message"
          className="flex flex-col items-center justify-between w-[80%] font-semibold italic"
        >
          MESSAGE
          <textarea
            className="resize-none w-full h-[250px] p-3 rounded-xl"
            name="message"
            id="form-message"
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => handleFormInputChange(e.target)}
            required
          />
        </label>

        <button
          type="submit"
          className="w-[50%] p-3 rounded-full bg-white font-semibold text-lg italic hover:scale-110"
        >
          Submit
        </button>

        { formMsg.length > 0 &&
          <span
            className="absolute p-3 rounded-lg bg-gray-500 text-white font-bold text-lg italic"
          >
            {formMsg}
          </span>
        }
      </form>
    </section>
  )
}
