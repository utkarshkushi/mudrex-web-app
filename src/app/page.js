import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-5 py-5 bg-gradient-to-b from-[#eddaea] via-[#cdd9f0]  to-[#f2f8fd] to-30%">
      <div>
        <Image height={60} width={180} src='/logo/logo.png' />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mt-20">
        <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold font-inter text-[#4a34c1] text-center">
          Make Investments In Crypto
        </h1>
        <h1 className="text-[#212021] text-center text-2xl font-inter font-bold">
          Simple, Safer & Smarter
        </h1>
        </div>
        <div className="mt-12">
        <p className="text-[#5f6e79] font-normal font-inter text-md text-center mb-5">
        LogIn or SignUp
        </p>
        <div>
          <form className="flex gap-3">
            <input type="text" placeholder="Enter phone number" className="px-5 py-2 focus:outline-none border-1 border-[#2b3136] font-inter rounded-lg" />
            <div>
            <button className="border-2 flex justify-center items-center px-4 m-auto py-3 text-md font-inter font-bold bg-[#cdd9f0] rounded-lg">
              <ArrowRight className=' h-5 w-5 ' strokeWidth={3} />
            </button> 
            </div>
          </form>
        </div>
      </div>
      </div>
      
    </div>
  );
}
