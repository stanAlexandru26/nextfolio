import qs from 'qs';

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export const getStrapiURL = (path = '') => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || process.env.NEXT_PUBLIC_BASE_URL
  }${path}`;
};
// process.env.NEXT_PUBLIC_STRAPI_API_URL || process.env.NEXT_PUBLIC_BASE_URL

// "http://localhost:1337"
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export const fetchData = async (path, urlParamsObject = {}, options = {}) => {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
};
