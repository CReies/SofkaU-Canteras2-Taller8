/**
 * Deletes a contact using the api
 *
 * @param {Number} id  id of the contact
 */
const deleteContact = async (id) => {
	const url = `http://localhost:9090/contact/${id}`;
	const reqData = {
		method: 'DELETE',
	};
	console.log(url);
	try {
		await fetch(url, reqData);
	} catch (error) {
		console.log(error);
	}
};

export default deleteContact;
