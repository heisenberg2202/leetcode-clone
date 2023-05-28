import React from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    return <form className='space-y-6 px-6 pb-4'>
        <h3 className="text-xl font-medium text-white">Sign in to Leetclone</h3>
        <div className="">
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'></label>
        </div>
    </form>
}
export default Login;