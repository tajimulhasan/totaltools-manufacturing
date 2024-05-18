import React, { useEffect, useRef } from 'react';
import SocialLogin from './SocialLogin/SocialLogin';
import authImg from '../../images/authImg.png';
import { useForm } from 'react-hook-form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';


const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );
  const [token] = useToken(user || guser || gituser);

const handleEmailWithRef = useRef('');
 const navigate = useNavigate();
 const location = useLocation();

 const from = location.state?.from?.pathname || "/";

 if(loading || gloading || gitloading){
  return <Loading></Loading>
}


  if (token) {
    navigate(from, { replace: true });
  }


    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
      console.log(data);
    };


const handleResetPass = async() =>{
   const email = handleEmailWithRef.current.value;
   if(email){
    await sendPasswordResetEmail(email);
    toast.success('Sent email')
   }
   else{
    toast.error("Please enter your email")
   }
}

    return (
        <div className="card-container">
      <div className="authImg">
        <img src={authImg} alt="" />
      </div>
      <div className="form-container">
        <h1 className="text-4xl text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label class="form-control w-full max-w-xs mt-1">
            <div class="label">
              <span class="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
              ref={handleEmailWithRef}
              {...register("email", {
                required: {
                    value: true,
                    message: "Email is required"
                },
                pattern: {
                    value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Provide a valid email",
                }
              })}
            />
            {errors.email?.type === "required" && (
                <small role='alert' className="text-red-500 text-sm my-1">{errors.email.message}</small>
            )}
            {errors.email?.type === "pattern" && (
                <small role='alert' className="text-red-500 text-sm my-1">{errors.email.message}</small>
            )}
          </label>
          <label class="form-control w-full max-w-xs mt-1">
            <div class="label">
              <span class="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                    value: true,
                    message: "*Password is required"
                },
                  minLength: {
                    value: 6,
                    message: "*Password should be at least 6 charecters"
                  }
              })}
            />
               {errors.password?.type === "required" && (
                <small role='alert' className="text-red-500 text-sm my-1">{errors.password.message}</small>
            )}
            {errors.password?.type === "minLength" && (
                <small role='alert' className="text-red-500 text-sm my-1">{errors.password.message}</small>
            )}
          </label>
          <p onClick={handleResetPass} className='text-blue-500 cursor-pointer max-w-max hover:underline my-1'>Forgot password?</p>
          <p className="text-red-500 m-0 my-2">{error?.message || gerror?.message || giterror?.message}</p>
          <br />
          <input
            className="btn  bg-black text-white hover:bg-primary w-full max-w-xs"
            type="submit"
            value="Login"
          />
            <p className="text-base text-center py-2">New in TotalTools? <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link></p>
        </form>
        <div class="flex flex-col w-full border-opacity-50">
          <div class="divider">OR</div>
        </div>
        <SocialLogin signInWithGoogle={signInWithGoogle} signInWithGithub={signInWithGithub}></SocialLogin>
      </div>
      <ToastContainer/>
    </div>
    );
};

export default Login;