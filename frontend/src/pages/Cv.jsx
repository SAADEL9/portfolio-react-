import cvPdf from '../assets/SAAD_EL_MAHI.pdf';

function Cv() {
	return (
		<div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#E8E6E1', padding: '40px' }}>
			<h1>My CV</h1>
			<p>Download my CV or view it online soon!</p>
			<a href={cvPdf} download style={{ color: '#D97A3D', textDecoration: 'underline', marginTop: '16px' }}>Download CV (PDF)</a>
		</div>
	);
}
export default Cv;
