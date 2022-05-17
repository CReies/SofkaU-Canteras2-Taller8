const editContact = async ({ id, value, info }) => {
	const url = `http://localhost:9090/contact/${info}/${id}`;
	console.log(value);
	try {
		var res = await fetch(url, {
			method: 'PUT',
			body: value,
		});
		var data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export default editContact;
