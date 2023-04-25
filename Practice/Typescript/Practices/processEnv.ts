import { z } from 'zod';

const envVariables = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string()
});
// cant add numbers or booleans to the object
envVariables.parse(process.env);
declare global {
  namespace NodeJS {
    interface ProcessEnv 
      extends z.infer<typeof envVariables> { }
  }
} 