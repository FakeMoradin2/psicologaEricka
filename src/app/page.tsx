'use client';

import { Geist, Geist_Mono, Heebo } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Script from 'next/script';

const heebo = Heebo({
  subsets: ['latin'],
  display: 'swap',
});

declare global {
  interface Window {
    emailjs: any;
  }
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    mensaje: ''
  });

  const [emailjsReady, setEmailjsReady] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = 'Nuevo mensaje de contacto';
    const body = `
      Nombre: ${formData.name}
      Apellido: ${formData.surname}
      Email: ${formData.email}
      Teléfono: ${formData.phone}
      Mensaje: ${formData.mensaje}
    `;

    const mailtoLink = `mailto:tavischong123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Limpiar el formulario después de enviar
    setFormData({
      name: '',
      surname: '',
      email: '',
      phone: '',
      mensaje: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Head>
        <title>Éricka - Psicoterapeuta Clínica</title>
        <meta name="description" content="Psicoterapeuta Clínica especializada en ayudarte a superar desafíos y encontrar un sentido renovado en tu vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script 
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        onLoad={() => {
          window.emailjs.init("YOUR_PUBLIC_KEY"); // Reemplaza con tu public key
          setEmailjsReady(true);
        }}
      />

      <main className={`min-h-screen bg-white ${heebo.className}`}>
        <Navbar />
        {/* Sección Hero */}
        <section className="container mx-auto px-4 pt-20 text-center">
          <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
            <Image
              src="/WhatsApp Image 2025-04-02 at 5.58.44 PM.jpeg"
              alt="Éricka Psicoterapeuta"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-black text-3xl font-bold mb-2">¡Hola! Soy Éricka,<br/>Psicoterapeuta<br/>Clínica.</h1>
          <p className="text-black mb-6">
            Mi pasión, es ayudarte a superar los desafíos y encontrar un sentido renovado en tu vida.
          </p>
          <p className="text-black mb-12">
            Creo firmemente en el poder transformador de la terapia y en la capacidad de cada individuo para crecer y sanar.
          </p>
        </section>

        {/* Sección Servicios */}
        <section className="bg-[#A8DCD1] py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
              <h3 className="text-black text-xl font-semibold mb-4">Psicología:</h3>
              <p className="text-black">
                La psicología es una disciplina que estudia la mente y el comportamiento. A través de la terapia, ayuda a las personas a comprender sus emociones, resolver conflictos y mejorar su bienestar emocional.
              </p>
              <Link href="/servicios#psicologia" className="text-blue-400 text-primary block mt-4 hover:text-primary/80">
                Ver todo
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
              <h3 className="text-black text-xl font-semibold mb-4">MINDFULNESS:</h3>
              <p className="text-black">
                El mindfulness, o atención plena, es una técnica de meditación que consiste en prestar atención al momento presente sin juzgarlo. Es una práctica que proviene del budismo, pero que se ha vuelto popular en Occidente.
              </p>
              <Link href="/servicios#mindfulness" className="text-blue-400 text-primary block mt-4 hover:text-primary/80">
                Ver todo
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
              <h3 className="text-black text-xl font-semibold mb-4">Equinoterapia:</h3>
              <p className="text-black">
                Se trata de una disciplina ecuestre que aprovecha la relación afectiva que se establece con el caballo para ayudar a personas con problemas de adaptación social a superar sus conflictos y así integrarse de forma normalizada en la sociedad.
              </p>
              <Link href="/servicios#equinoterapia" className="text-blue-400 text-primary block mt-4 hover:text-primary/80">
                Ver todo
              </Link>
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-black text-2xl font-bold mb-6">Contáctame</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-black">Apellido</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black">Número de teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-black">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF6464] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#FF6464]/90 transition-colors shadow-sm"
            >
              Enviar
            </button>
          </form>

          {/* Sección Ubicación */}
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7168906465117!2d-106.09108892393611!3d28.635299882418786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43262c43b33f%3A0x4498e5c7e0937df5!2sCalle%20Cedro%20406%2C%20Granjas%2C%2031100%20Chihuahua%2C%20Chih.!5e0!3m2!1ses!2smx!4v1709595049943!5m2!1ses!2smx"
              className="h-64 w-full rounded-lg shadow-md border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-black flex items-center text-lg font-semibold">
                  <span className="mr-2">📍</span> Ubicación | Chihuahua, Chihuahua
                </h3>
                <p className="ml-6 text-black">
                  Calle Cedro 406<br />
                  Col. Granjas
                </p>
              </div>
              <div>
                <h3 className="text-black flex items-center text-lg font-semibold">
                  <span className="mr-2">📅</span> Agenda | haz una cita
                </h3>
                <p className="ml-6 text-black">
                  WhatsApp<br />
                  614 107 77 60
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer con redes sociales */}
        <footer className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-[#21243D] hover:text-[#21243D]/80 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[#21243D] hover:text-[#21243D]/80 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[#21243D] hover:text-[#21243D]/80 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[#21243D] hover:text-[#21243D]/80 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <p className="text-center text-black text-sm">
              Copyright ©2025 Todos los derechos reservados
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}