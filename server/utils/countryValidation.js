const { COUNTRIES, findCountry, normalizeCountry } = require('../data/countries');

const validateCountryMiddleware = (req, res, next) => {
  if (req.body.country || req.body.countryName || req.body.countryCode) {
    const raw = req.body.countryCode || req.body.countryName || req.body.country;
    const normalized = normalizeCountry(raw);
    req.normalizedCountry = normalized;
    req.body.countryCode = normalized.countryCode;
    req.body.country = normalized.countryName;
  }
  next();
};

module.exports = {
  COUNTRIES,
  findCountry,
  normalizeCountry,
  validateCountryMiddleware
};
