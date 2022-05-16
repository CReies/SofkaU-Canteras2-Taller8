import { useEffect, useState } from 'react';
import getContact from '../services/getContact';

const useContact = ({ id }) => {
	const [loading, setLoading] = useState(false);

	const [contact, setContact] = useState({});

	useEffect(() => {
		setLoading(true);

		return async () => {
			const contact = await getContact({ id });
			setContact(contact);
			setLoading(false);
		};
	}, [setContact, id]);

	return { loading, contact };
};

export default useContact;
