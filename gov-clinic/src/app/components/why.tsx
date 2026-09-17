"use client";
import { ShieldCheck, Users, Lock, Building2, Smile } from "lucide-react";
import Image from 'next/image';

export default function Why() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-30 px-6 lg:grid-cols-2">
      
      <div className="order-2 lg:order-1">
        <Image
          src="/labb.jpeg"
          alt="laboratory inspection"
          width={800}
          height={600}
          className="h-auto w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
      <div className="order-1 lg:order-2">
        <div>
          <p className="eyebrow">Why choose us</p><h2 className="section-title">Your health, our priority</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">HIV is a manageable long-term health condition with early diagnosis, consistent treatment and appropriate support. Our team provides care without stigma or judgement.</p><ul className="mt-7 space-y-4 text-slate-700">
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

      </div>
      </div>
    </section>
  );
    
  
}



     
