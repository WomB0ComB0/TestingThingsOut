import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'next/image';
import { Section, Article } from '@/components/semantics/index';

interface SuccessProps {
  email: string;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Success: React.FC<SuccessProps> = ({ email, setSuccess }) => (
  <>
    <div className="bg-slate-900 flex items-center justify-center h-screen">
      <Section className="bg-white pt-20 px-4 pb-8 flex flex-col justify-between h-screen md:h-auto md:w-[500px] md:rounded-2xl md:p-12">
        <Article>
          <Image src={IoIosCheckmarkCircle} height={60} width={60} alt="Checkmark" className="mb-8" />

          <h2 className="text-slate-900 font-bold text-4xl lg:text-5xl mb-8">Thanks for subscribing!</h2>
          <p className="mb-8">
            A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside
            to confirm your subscription.
          </p>
        </Article>

        <button
          onClick={() => setSuccess(false)}
          style={{
            backgroundColor: 'hsl(234, 29%, 20%)',
          }}
          className="py-3 p-x4 w-full text-white font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 rounded-lg"
        >
          Dismiss message
        </button>
      </Section>
    </div>
  </>
);
