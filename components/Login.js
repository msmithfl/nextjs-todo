import React, { use, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
  }
  // error div renders conditionally
  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-1 sm:gap-2">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
        {isLoggingIn ? "Login" : "Register"}
      </h1>
      {error && (
        <div className="w-full max-w-[30ch] text-center border-rose-400 border border-solid text-rose-400 py-2">
          {error}
        </div>
      )}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[30ch]"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[30ch]"
      />
      <button
        onClick={submitHandler}
        className="w-full mt-1 max-w-[30ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
}
