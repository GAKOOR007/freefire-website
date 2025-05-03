import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">دليل Free Fire</h1>
      <nav>
        <Link to="/" className="mx-2 text-lg hover:text-red-500">الرئيسية</Link>
        <Link to="/guide" className="mx-2 text-lg hover:text-red-500">الدليل الشامل</Link>
        <Link to="/videos" className="mx-2 text-lg hover:text-red-500">الفيديوهات</Link>
        <Link to="/community" className="mx-2 text-lg hover:text-red-500">المجتمع</Link>
        <Link to="/contact" className="mx-2 text-lg hover:text-red-500">تواصل معنا</Link>
      </nav>
    </header>
  );
}

export default Header;