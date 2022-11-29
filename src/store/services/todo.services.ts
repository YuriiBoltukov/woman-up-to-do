/**
 * for saving data to localStorage
 * @param {string} key
 * @param {T} value
 * @returns {void | Error}
 */
export function saveToLocalStorage<T>(key: string, value: T): void | Error {
	if (!value) throw Error('Value should be defined');

	const stringValue = typeof value === 'string' ? value : JSON.stringify(value);

	localStorage.setItem(key, stringValue);
}

/**
 * for getting data from localStorage
 * @param {string} key
 * @returns {T | undefined}
 */
export function getFromLocalStorage<T>(key: string): T | undefined {
	let result: T | undefined;

	if (key in localStorage) {
		result = JSON.parse(localStorage.getItem(key) ?? '');
	}

	return result;
}
