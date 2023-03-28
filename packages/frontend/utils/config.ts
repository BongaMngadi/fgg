const API_PRODUCTION_URL = 'https://fgg-1mmr.onrender.com';
const API_DEV_URL = 'https://fgg-1mmr.onrender.com';

export const Config = {
  API_URL: process.env.NODE_ENV === 'production' ? API_PRODUCTION_URL : API_DEV_URL,
  GOOGLE_ANALYTICS_ID: 'G-9K5Q4L9EQE',
};
