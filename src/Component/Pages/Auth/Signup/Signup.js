import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Signup.css";
import authImg from "../../../images/authImg.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Loading/Loading";
import useToken from "../../../../hooks/useToken";
import { useEffect } from "react";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const [signInWithGithub, gituser, gitloading, giterror] =
    useSignInWithGithub(auth);

  const [updateProfile] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token] = useToken(user || guser || gituser);

  const navigate = useNavigate();

  useEffect(() => {
    if(token){
      navigate("/")
    }
  }, [token, navigate]);

  if (loading || gloading || gitloading) {
    return <Loading />;
  }


  //submition
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
  };

  return (
    <div className="card-container">
      <div className="authImg">
        <img src={authImg} alt="" />
      </div>
      <div className="form-container">
        <h1 className="text-4xl text-center">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control mt-1">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "*Name is required",
                },
              })}
            />
            <div>
              {errors.name?.type === "required" && (
                <small role="alert" className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </small>
              )}
            </div>
          </label>
          <label className="form-control w-full max-w-xs mt-1">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "*Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "*Provide a valid email",
                },
              })}
            />
            <div>
              {errors.email?.type === "required" && (
                <small role="alert" className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </small>
              )}

              {errors.email?.type === "pattern" && (
                <small role="alert" className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </small>
              )}
            </div>
          </label>
          <label className="form-control w-full max-w-xs mt-1">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "*Password is required",
                },
                minLength: {
                  value: 6,
                  message: "*Password should be at least 6 charecters",
                },
              })}
            />
            <div>
              <small>
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </small>
            </div>
          </label>
          <p className="text-red-500 m-0 my-2">
            {error?.message || gerror?.message || giterror?.message}
          </p>
          <br />
          <input
            className="btn  bg-black text-white hover:bg-primary w-full max-w-xs"
            type="submit"
            value="Sign Up"
          />
          <p className="text-base text-center py-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
       <div className="exten">
       <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <SocialLogin
          signInWithGoogle={signInWithGoogle}
          signInWithGithub={signInWithGithub}
        ></SocialLogin>
       </div>
      </div>
    </div>
  );
};

export default Signup;
