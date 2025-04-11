import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-sm space-y-6">
          <img src="/logo.png" alt="Logo" className="h-10 mx-auto" />
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-full border"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-full border"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-full border"
          />

          <div className="text-xs text-gray-500">
            {isLogin ? (
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <button className="text-orange-400 text-xs">
                  Reset Password?
                </button>
              </div>
            ) : (
              <p>
                By creating an account, you agree to the{" "}
                <a className="text-orange-500 underline" href="#">
                  terms of use
                </a>{" "}
                and our{" "}
                <a className="text-orange-500 underline" href="#">
                  privacy policy
                </a>
                .
              </p>
            )}
          </div>

          <button className="w-full py-3 bg-black text-white rounded-full">
            {isLogin ? "Log In" : "Create Account"}
          </button>

          <p className="text-sm text-center">
            {isLogin ? (
              <>
                Don’t have account yet?{" "}
                <button
                  className="text-orange-500"
                  onClick={() => setIsLogin(false)}
                >
                  New Account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-orange-500"
                  onClick={() => setIsLogin(true)}
                >
                  Log in
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-100 to-orange-100 items-center justify-center p-10 rounded-l-3xl">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-500">
            Welcome to Appcopilot
          </h2>
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Compare <br /> Your Property
          </h1>
          <p className="text-gray-600">
            Discover homes that match your lifestyle.
          </p>
          <img
            src="/house.png"
            alt="Modern Home"
            className="mt-8 w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
