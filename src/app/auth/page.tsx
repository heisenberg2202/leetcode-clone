import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type indexProps = {
    
};

const AuthPage:React.FC<indexProps> = () => {
    
    return (
      <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <img src="/hero.png" alt="hero img" />
          <AuthModal />
        </div>
      </div>
    );
}
export default AuthPage;