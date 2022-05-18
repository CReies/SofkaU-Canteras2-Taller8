/**
 * Posts a contact to the api
 *
 * @param {Object} body Contact data
 */
const addContact = async (body) => {
	const reqData = {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	};

	try {
		await fetch('http://localhost:9090/contact', reqData);
	} catch (error) {
		console.log(error);
	}
};
export default addContact;
