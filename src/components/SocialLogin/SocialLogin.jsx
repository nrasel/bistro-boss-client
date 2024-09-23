import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "./../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axisoPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axisoPublic.post("/user", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((err) => {});
  };
  return (
    <div className="text-center">
      <button onClick={handleGoogleSignIn} className="btn mb-3">
        <FcGoogle className="text-2xl" /> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
