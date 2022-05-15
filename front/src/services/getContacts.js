const getContacts = async (url = 'http://localhost:9090/contacts') => {
	try {
		const response = await fetch(url);
		const contacts = await response.json();
		console.log(contacts);
		return contacts;
	} catch (error) {
		console.log(error);
	}
};

export default getContacts;
