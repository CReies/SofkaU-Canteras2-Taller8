/**
 * Edits a contact in the api
 *
 * @param {Number} id id of the edited contact
 * @param {String} value value passed to the api
 * @param {String} info name of the value passed (name, tel...)
 */
const editContact = async (id, value, info) => {
	const url = `http://localhost:9090/contact/${info}/${id}`;
	const reqData = {
		method: 'PATCH',
		body: value,
	};

	try {
		await fetch(url, reqData);
	} catch (error) {
		console.log(error);
	}
};

export default editContact;
