/**
 * Gets the data of one contact using the id
 *
 * @param {Number} id id of the contact
 * @returns Data of the contact with the id passed
 */
const getContact = async (id) => {
	const url = `http://localhost:9090/contact/${id}`;
	try {
		const response = await fetch(url);
		const contact = await response.json();
		return contact;
	} catch (error) {
		console.log(error);
	}
};

export default getContact;
