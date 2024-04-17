export const getFromLocalStorage = <T>(key: string): T[] => {
	try {
		const savedDataString = localStorage.getItem(key)
		if (!savedDataString) {
			return []
		}

		const savedData: T[] = JSON.parse(savedDataString)

		if (!Array.isArray(savedData)) {
			console.error(`Data stored under key "${key}" is not an array.`)
			return []
		}

		return savedData
	} catch (error) {
		console.error(`Error parsing data from localStorage with key "${key}":`, error)
		return []
	}
}
