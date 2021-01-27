import './css/footer.css';
import clsx from 'clsx';
const Footer = ({ shuffleAll }) => {
	return (
		<div className="footer-container">
			<button className="generator-button" onClick={shuffleAll}>
				Generate
			</button>
		</div>
	);
};

export default Footer;
