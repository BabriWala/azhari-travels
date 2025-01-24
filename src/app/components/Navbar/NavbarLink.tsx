"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface NavbarLinkProps {
    name: string;
    href: string;
    isActive?: boolean;
    onClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ name, href, isActive, onClick }) => {
    const router = useRouter();
    const activeClass = isActive
        ? 'text-primary font-bold '
        : 'text-primary font-light ';

    return (
        <Link href={href} passHref>
            <span
                className={`block px-3 py-2 rounded-md text-base ${activeClass} hover:text-primary hover:font-bold duration-300 transition-all `}
                onClick={onClick}
                aria-current={isActive ? 'page' : undefined}
            >
                {name}
            </span>
        </Link>
    );
};

export default NavbarLink;
