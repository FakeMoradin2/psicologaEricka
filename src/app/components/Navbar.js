'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return pathname === path;
    };

    const linkStyles = (path) => {
        return `transition-colors ${
            isActive(path)
            ? "text-pink-500 font-semibold"
            : "text-gray-600 hover:text-pink-500"
        }`;
    };

    return (
        <div className="fixed w-full top-0 z-50">
            <div className="relative bg-white shadow-md">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">

                        {/* Botón de menú móvil */}
                        <button 
                            className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        {/* Menú de escritorio */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            <Link href="/" className={linkStyles("/")}>
                                Inicio
                            </Link>
                            <Link href="/sobremi" className={linkStyles("/sobremi")}>
                                Sobre mí
                            </Link>
                            <Link href="/servicios" className={linkStyles("/servicios")}>
                                Servicios
                            </Link>
                        </div>
                    </div>

                    {/* Menú móvil */}
                    <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
                        <div className="flex flex-col space-y-4">
                            <Link 
                                href="/" 
                                className={`${linkStyles("/")} px-2 py-1 rounded-md hover:bg-gray-100`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link 
                                href="/sobremi" 
                                className={`${linkStyles("/sobremi")} px-2 py-1 rounded-md hover:bg-gray-100`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sobre mí
                            </Link>
                            <Link 
                                href="/servicios" 
                                className={`${linkStyles("/servicios")} px-2 py-1 rounded-md hover:bg-gray-100`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Servicios
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar; 