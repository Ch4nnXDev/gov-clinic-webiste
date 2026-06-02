"use client";
import { ShieldCheck, Users, Lock, Building2, Smile } from "lucide-react";
import CountUp from 'react-countup';
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
        <div className="flex flex-row  mt-10 mr-50 p-2 justify-center items-center text-black font-xl gap-3">
          <div className="flex flex-col p-10">
            <CountUp end={100} duration={6} prefix="+" className="text-4xl font-bold" />
            <span className="text-lg mt-5">Dedicated Professionals</span>
          </div>
          <div className="flex flex-col p-10">
            <CountUp end={1000} duration={6} prefix="+" className="text-4xl font-bold" />
            <span className="text-lg mt-5">Happy Patients</span>
          </div>
          <div className="flex flex-col p-10">
            <CountUp end={500} duration={6} prefix="+" className="text-4xl font-bold" />
            <span className="text-lg mt-5">Satisfied Patients</span>
          </div>
        </div>
      <div>
        
      </div>
      
      </div>

    </section>
  );
    
  
}



     