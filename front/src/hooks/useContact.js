import { useEffect, useState } from 'react';
import getContact from '../services/getContact';

/**
 * Custom hook to handle the getContact method
 *
 * @param {Number} id Id of the contact
 * @returns An array with a Boolean if loading and the contact
 */
const useContact = (id) => {
	const [loading, setLoading] = useState(false);

	const [contact, setContact] = useState({});

	// When a dependence changes, the method is executed
	useEffect(() => {
		setLoading(true);

		return async () => {
			const contact = await getContact(id);
			setContact(contact);
			setLoading(false);
		};
	}, [setContact, id]);

	return { loading, contact };
};

export default useContact;
