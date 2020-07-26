import dotenv from "dotenv";

dotenv.config();

// Обьект с данными администратора сайта
const adminData = {
  name: process.env.ADMIN_NAME || 'admin',
  email: process.env.ADMIN_EMAIL || 'admin@gmail.com',
  password: process.env.ADMIN_PASSWORD || '12345678',
  have_access: true,
  is_admin: true
}

export default adminData;