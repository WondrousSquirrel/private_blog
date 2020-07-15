import dotenv from "dotenv";

dotenv.config();

// Обьект с данными администратора сайта
const adminData = {
  name: process.env.ADMIN_NAME || 'admin',
  email: process.env.ADMIN_EMAIL || 'cxcvx@gmail.com',
  password: process.env.ADMIN_PASSWORD || 'admin_password',
}

export default adminData;