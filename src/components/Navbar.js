import React from 'react';
import Link from 'next/link';
import Search from './Search';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <Search />
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;