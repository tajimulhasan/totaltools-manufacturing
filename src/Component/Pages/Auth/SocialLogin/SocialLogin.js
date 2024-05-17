import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github-logo.png';
import './SocialLogin.css';

const SocialLogin = ({signInWithGoogle, signInWithGithub}) => {
    return (
       <div>
         <div onClick={() => signInWithGoogle()} className='social-container'>
            <img src={google} alt="" />
            <p>Continue with Google</p>
        </div>
        <div onClick={() => signInWithGithub()} id='github' className='social-container'>
            <img src={github} alt="" />
            <p>Continue with GitHub</p>
        </div>
       </div>
    );
};

export default SocialLogin;