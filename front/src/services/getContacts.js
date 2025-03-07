/**
 * Gets the data of all the contacts
 *
 * @returns Data of all the contacts
 */
const getContacts = async () => {
	const url = 'http://localhost:9090/contacts';
	try {
		const response = await fetch(url);
		const contacts = await response.json();
		return contacts;
	} catch (error) {
		console.log(error);
	}
};

export default getContacts;
