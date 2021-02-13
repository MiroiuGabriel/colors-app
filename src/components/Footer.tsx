import './css/footer.css';

const Footer = ({ shuffleAll }: { shuffleAll: () => void }) => {
	return (
		<div className="footer-container">
			<button className="generator-button" onClick={shuffleAll}>
				Generate
			</button>
		</div>
	);
};

export default Footer;
