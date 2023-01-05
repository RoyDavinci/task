import * as joi from 'joi';
const envSchema = joi
  .object({
    DATABASE_NAME: joi.string(),
    DATABASE_PASSWORD: joi.string(),
    DATABASE_USER: joi.string(),
  })
  .unknown()
  .required();

const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  databaseConfig: {
    DATABASE_NAME: envVars.DATABASE_NAME,
    DATABASE_PASSWORD: envVars.DATABASE_PASSWORD,
    DATABASE_USER: envVars.DATABASE_USER,
  },
};
export default config;
