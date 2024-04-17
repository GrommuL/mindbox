export const saveToLocalStorage = <T>(key: string, data: T): void => {
	try {
		const serializedDataString = JSON.stringify(data)
		localStorage.setItem(key, serializedDataString)
	} catch (error) {
		console.error(`Error saving data to localStorage with key "${key}":`, error)
	}
}
