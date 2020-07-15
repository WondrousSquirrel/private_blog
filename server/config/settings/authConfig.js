import dotenv from 'dotenv';

dotenv.config();

const authConfig = {
  secretKey: process.env.SECRET_KEY || 'my secret key'
};

export default authConfig;
