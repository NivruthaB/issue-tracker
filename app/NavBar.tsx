'use client';

import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const Navbar = () => {
    const path = usePathname();

    const links = [
        {
            label: 'Dashboard',
            href: '/'
        },
        {
            label: 'Issues',
            href: '/issues'
        }
    ]
    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href={'/'}><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                {links.map((link, index) =>
                    <li key={index}>
                        <Link
                            href={link.href}
                            className={classNames({
                                'text-zinc-400': path === link.href,
                                'text-zinc-500': path !== link.href,
                                'hover:text-zinc-100 transition-colors': true
                            })}>
                            {link.label}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
