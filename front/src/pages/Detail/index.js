import ContactDetail from '../../components/ContactDetail';
import useContact from '../../hooks/useContact';

/**
 * Page showed when the user clicks a contact
 *
 * @param {Object} object request with the  url params
 * @returns
 */
const Detail = ({ params }) => {
	const { id } = params;
	const { contact, loading } = useContact({ id });

	// What will be rendered
	const contactRender = loading ? (
		'loading'
	) : (
		<ContactDetail contact={contact} />
	);

	return <div>{contactRender}</div>;
};

export default Detail;
