import z, { ZodError } from "zod/v4";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const EnvSchema = z.object({
  PORT: z.coerce.number().default(8000),
  URI: z.string(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

try {
  EnvSchema.parse(process.env);
} catch (err) {
  if (err instanceof ZodError) {
    let message = "Missing required values in .env:\n";
    message += Object.keys(z.flattenError(err).fieldErrors).join("\n");
    const e = new Error(message);
    e.stack = "";
    throw e;
  } else console.error(err);
}

export default EnvSchema.parse(process.env);
