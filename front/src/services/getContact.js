const getContact = async ({ id }) => {
	try {
		const response = await fetch(`http://192.168.100.23:9090/contact/${id}`);
		const contact = await response.json();
		return contact;
	} catch (error) {
		console.log(error);
	}
};

export default getContact;
