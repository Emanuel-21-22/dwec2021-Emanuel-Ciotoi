/**
 * Callback function of an Array.sort that sorts objects by properties
 * @param {string} fieldName property name of object
 * @param {*} a provided by `sort()`
 * @param {*} b provided by `sort()`
 * @returns {Array}
 */
export const byField = (fieldName) => (a, b) =>
	a[fieldName] < b[fieldName] ? -1 : a[fieldName] > b[fieldName] ? 1 : 0;
