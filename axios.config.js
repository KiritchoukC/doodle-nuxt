module.exports = {
  baseURL: process.env.NOW_URL
    ? `${process.env.NOW_URL}/api`
    : 'http://localhost:3000/api',
  proxyHeaders: false,
  credentials: false
}
