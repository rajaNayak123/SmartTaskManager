import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-600 rounded-xl p-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="outline-none bg-transparent border-2 border-red-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          <input
            className=" outline-none bg-transparent border-2 border-red-600  text-xl py-3 px-5 rounded-full mt-8 placeholder:text-gray-400"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            className=" mt-6 text-white bg-red-600 border-2 border-none text-xl py-3 px-16 rounded-full placeholder:text-gray-300 cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
