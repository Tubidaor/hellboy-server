module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://tubidaor@localhost/hellboy',
  JWT_SECRET: process.env.JWT_SECRET || 'in-between-dreams',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '24hrs'
}