import ContactDetail from '../../components/ContactDetail';
import useContact from '../../hooks/useContact';

const Detail = ({ params }) => {
	const { id } = params;
	const { contact, loading } = useContact({ id });
	const contactRender = loading ? (
		'loading'
	) : (
		<ContactDetail contact={contact} />
	);
	return <div>{contactRender}</div>;
};

export default Detail;
