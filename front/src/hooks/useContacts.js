import { useEffect, useState } from 'react';
import getContacts from '../services/getContacts';

const useContacts = () => {
	const [loading, setLoading] = useState(false);

	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		setLoading(true);

		return async () => {
			const contacts = await getContacts();
			setContacts(contacts);
			setLoading(false);
		};
	}, [setContacts]);

	return { loading, contacts };
};

export default useContacts;
