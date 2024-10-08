import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
	const navigate = useNavigate();
	return (
		<>
			<h1>My Home Page</h1>
			<p>
				Go to <Link to="products">the list of products</Link>
			</p>
		</>
	);
}
