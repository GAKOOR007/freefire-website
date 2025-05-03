import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('freefire-background.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-bold mb-4">مرحبًا بك في عالم Free Fire!</h1>
          <p className="text-2xl mb-8">اكتشف جميع الأسرار والنصائح لتصبح محترفًا.</p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full text-xl hover:bg-red-600 transition duration-300">
            ابدأ الآن
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;