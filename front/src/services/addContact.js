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
		const res = await fetch('http://localhost:9090/contact', reqData);
		const resData = await res.json();
		console.log(resData);
	} catch (error) {
		console.log(error);
	}
};
export default addContact;
