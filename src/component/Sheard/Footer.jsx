import React from 'react';

const Footer = () => {
    return (
        <div>
             <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* লোগো এবং কপিরাইট */}
        <div className="flex flex-col items-center mb-6">
          <img src="/icon/b-logo.jpeg" alt="Logo" className="h-8 w-8" />
          <p className="mt-2 text-sm">© 2024 Your Blog Website</p>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;<h1>Footer</h1>