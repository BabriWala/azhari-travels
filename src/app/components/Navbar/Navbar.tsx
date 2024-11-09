// @ts-nocheck
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import NavbarLink from './NavbarLink';
import ThemeToggleButton from './ThemeToggleButton';
import { Icon } from '@iconify/react/dist/iconify.js';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

interface NavLink {
    name: string;
    href: string;
}

const NAV_LINKS: NavLink[] = [
    { name: 'হোম', href: '/' },
    { name: 'আপনার জিজ্ঞাসা!', href: '/frequently-asked-questions' },
    { name: 'অভিব্যক্তি', href: '/happy-clients' },
    { name: 'আমরা কিভাবে কাজ করি', href: '/how-we-work' },
    { name: 'নিয়ম কানুন', href: '/terms-and-conditions' },
    { name: 'রিফান্ড', href: '/refund-policy' },
    { name: 'যোগাযোগ', href: '/contact' },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname(); // Use pathname to monitor route changes

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);

    // Close the menu when the pathname changes
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-primary dark:bg-background-dark shadow-md z-50 transition-all">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <Link href="/" className='flex items-center gap-2'>
                    <img src='/Logo.png' className="w-8 h-8" />
                    <span className="text-2xl font-bold text-primary dark:text-primary-dark">আজহারী ট্রাভেলস</span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    {NAV_LINKS.map((link) => (
                        <NavbarLink
                            key={link.name}
                            name={link.name}
                            href={link.href}
                            isActive={pathname === link.href}
                        />
                    ))}
                    <ThemeToggleButton />
                </div>
                <button
                    onClick={handleMenuToggle}
                    className="md:hidden text-primary dark:text-text-dark focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <Icon icon={"oui:cross"} className="h-6 w-6"></Icon> : <Icon icon="fe:bar" className="h-6 w-6"></Icon>}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gradient-primary dark:bg-background-dark">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <NavbarLink
                                key={link.name}
                                name={link.name}
                                href={link.href}
                                isActive={pathname === link.href}
                                onClick={() => setMenuOpen(false)}
                            />
                        ))}
                        <ThemeToggleButton />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
