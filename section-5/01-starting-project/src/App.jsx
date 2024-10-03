import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleChange(inputIdentifier, newValue) {
		console.log(typeof newValue);
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: Number(newValue),
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput
				userInput={userInput}
				setUserInput={setUserInput}
				onChange={handleChange}
				onChange
			/>
		</>
	);
}

export default App;
