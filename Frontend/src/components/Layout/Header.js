import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<Fragment>
			<header className={styles.header}>
				<h1>Meal Time</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={styles['main-image']}>
				<img src={mealsImage} alt='A table full of food' />
			</div>
		</Fragment>
	);
};

export default Header;
