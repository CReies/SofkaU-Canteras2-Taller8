const getContacts = async (id) => {
	try {
		const response = await fetch(`http://192.168.100.23:9090/contact/${id}`);
		const contacts = await response.json();
		console.log(contacts);
		return contacts;
	} catch (error) {
		console.log(error);
	}
};

export default getContacts;
