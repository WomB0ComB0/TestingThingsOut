declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_APIKEY: string;
      NEXT_PUBLIC_FIREBASE_APIKEY: string;
      NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: string;
      NEXT_PUBLIC_FIREBASE_PROJECTID: string;
      NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: string;
      NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: string;
      NEXT_PUBLIC_FIREBASE_APPID: string;
      NEXT_PUBLIC_FIREBASE_MEASUREMENTID: string;
      NEXT_PUBLIC_RECAPTCHA_SITEKEY: string;
    }
  }
}

export {};
