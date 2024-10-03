
export default function UserInput({onChange}) {

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="">Initial Investment</label>
					<input type="number" required value={onChange.initialInvestment} onChange={(event) => onChanges('initialInvestment', event.target.value)} />
				</p>
				<p>
					<label htmlFor="">Annual Investment</label>
					<input type="number" required value={onChange.annualInvestment} onChange={(event) => onChanges('annualInvestment', event.target.value)} />
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="">Expected Return</label>
					<input type="number" required value={onChange.expectedReturn} onChange={(event) => onChanges('expectedReturn', event.target.value)} />
				</p>
				<p>
					<label htmlFor="">Duration</label>
					<input type="number" required value={onChange.duration} onChange={(event) => onChanges('duration', event.target.value)} />
				</p>
			</div>
		</section>
	);
}
