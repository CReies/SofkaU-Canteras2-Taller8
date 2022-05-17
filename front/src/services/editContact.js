const editContact = async ({ id, value, info }) => {
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
