import { ShieldCheck, Users, Lock, Building2, Smile } from "lucide-react";
import Image from 'next/image';
export default function Why() {
  return (
    <section className="flex flex-row bg-white w-full items-center justify-center h-screen py-15">
      
      <div className="flex flex-col w-1/2 p-1 items-center h-full">
       
       <div className="h-full">
       
        <Image
          src="/heart.jpg"
          alt="Clinic Logo"
          width={500}
          height={100}
          className="object-contain"
        />
      </div>
      </div>
      <div className="flex flex-col w-1/2 p-10 h-full">
      <div>
        <h2 className="text-black text-3xl font-bold mb-6">Your Health, Our Priority</h2>
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
      <div>
        
      </div>
      
      </div>

    </section>
  );
    
  
}



     