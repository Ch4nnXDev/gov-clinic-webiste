import { ShieldCheck, Users, Lock, Building2, Smile } from "lucide-react";
import Image from 'next/image';
export default function Why() {
  return (
    <section className="flex flex-col bg-white w-full items-center justify-center h-screen py-15 md:flex-row">
      
      <div className="flex flex-col w-1/2 p-1 items-center h-full">
       
       <div className="h-full">
       
        <Image
          src="/labb.jpeg"
          alt="laboratory inspection"
          width={500}
          height={100}
          className="object-contain border-2 rounded-xl"
        />
      </div>
      </div>
      <div className="flex flex-col w-1/2 p-10 h-full">
        <div>
          <h2 className="text-black text-3xl font-bold mb-6 animate-bounce">Your Health, Our Priority</h2>
          <ul className="space-y-4 text-black">
            <li className="flex items-center">
              <ShieldCheck className="mr-3" />
              Experienced Medical Professionals
            </li>
            <li className="flex items-center">
              <Users className="mr-3" />
              Comprehensive Healthcare Services
            </li>
            <li className="flex items-center">
              <Lock className="mr-3" />
              Confidential and Compassionate Care
            </li>
            <li className="flex items-center">
              <Building2 className="mr-3" />
              State-of-the-Art Facilities
            </li>
            <li className="flex items-center">
              <Smile className="mr-3" />
              Patient-Centered Approach
            </li>
          </ul>

        </div>
        <div className="flex flex-row  mt-10 mr-30 p-2 justify-center items-center text-black font-xl gap-4">
          <div className="flex flex-col bg-blue-200  p-20"></div>
          <div className="flex flex-col bg-red-200  p-20"></div>
          <div className="flex flex-col bg-green-200 p-20"></div>
        </div>
      <div>
        
      </div>
      
      </div>

    </section>
  );
    
  
}



     