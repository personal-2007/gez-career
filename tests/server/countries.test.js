const assert = require('assert');
const { COUNTRIES, findCountry, normalizeCountry } = require('../../server/data/countries');

console.log('[TEST COUNTRIES] Running 197-Country dataset validation tests...');

// Test 1: Verify exact 197 countries count
assert.strictEqual(COUNTRIES.length, 197, `Expected exactly 197 countries, found ${COUNTRIES.length}`);
console.log('✓ Test 1 Passed: Exactly 197 UN countries present.');

// Test 2: Check for duplicate country codes
const codes = COUNTRIES.map(c => c.code);
const uniqueCodes = new Set(codes);
assert.strictEqual(codes.length, uniqueCodes.size, 'Duplicate country ISO codes found!');
console.log('✓ Test 2 Passed: All country ISO codes are unique.');

// Test 3: Check for duplicate country names
const names = COUNTRIES.map(c => c.name);
const uniqueNames = new Set(names);
assert.strictEqual(names.length, uniqueNames.size, 'Duplicate country names found!');
console.log('✓ Test 3 Passed: All country names are unique.');

// Test 4: Test country search helper
const india = findCountry('India');
assert.ok(india, 'Failed to find India');
assert.strictEqual(india.code, 'IN');

const germanyByCode = findCountry('DE');
assert.ok(germanyByCode, 'Failed to find Germany by code DE');
assert.strictEqual(germanyByCode.name, 'Germany');

console.log('✓ Test 4 Passed: findCountry helper matches code & name.');

// Test 5: Test normalizeCountry helper
const normVal = normalizeCountry('switzerland');
assert.strictEqual(normVal.countryCode, 'CH');
assert.strictEqual(normVal.countryName, 'Switzerland');

console.log('✓ Test 5 Passed: normalizeCountry accurately normalizes input string.');

console.log('[TEST COUNTRIES] All 197-Country tests passed cleanly!');
