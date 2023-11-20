'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Success } from './Success';
import { Article } from '@/components/semantics/index';
function NewsLetter() {
  const [success, setSuccess] = useState(false);

  const validate = (values: { email: string }) => {
    const errors: { email?: string } = {};

    if (!values.email) {
      errors.email = 'Valid email required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('Form submitted successfully');
      setSuccess(true);
    },
  });

  return (
    <>
      {!success && (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Article className="flex items-center justify-between">
            <label htmlFor="email" className="block text-slate-900 font-bold text-sm mb-2">
              Email address
            </label>
            {formik.errors.email ? <p className="text-sm text-rose-500 font-bold">{formik.errors.email}</p> : null}
          </Article>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@company.com"
            className={`w-full border rounded-lg py-3 px-4 mb-4 outline-none focus:border-slate-700 ${
              formik.errors.email && 'bg-rose-100 border-rose-400 focus:border-rose-400'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <button
            onClick={() => formik.handleSubmit}
            type="submit"
            style={{
              backgroundColor: 'hsl(234, 29%, 20%)',
            }}
            className="py-3 p-x4 w-full text-white font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 rounded-lg"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      )}
      {success && (
        <>
          <Success email={formik.values.email} setSuccess={setSuccess} />
        </>
      )}
    </>
  );
}

export default NewsLetter;
