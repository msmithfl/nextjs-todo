import React from "react";

export default function Login() {
  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-1 sm:gap-2">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl">LOGIN</h1>
      <input
        type="text"
        placeholder="Email Address"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[30ch]"
      />
      <input
        type="text"
        placeholder="Password"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[30ch]"
      />
      <button className="w-full mt-1 max-w-[30ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
    </div>
  );
}
