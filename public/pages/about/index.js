import styles from './style.module.css';
import Map from './map';

const About = ({ query }) => (

	<section class={styles.about}>
		<h1>About</h1>
		<p>Visit our headquarters.</p>
		<Map basemap={query.basemap} />
	</section>
);

export default About;
