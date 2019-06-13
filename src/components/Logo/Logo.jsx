import React from 'react';

import styles from './Logo.module.scss';
import logoImage from '../../assets/images/logo.png';

const Logo = () => (
	<img className={styles.logo} src={logoImage} alt="potluck logo" />
);

export default Logo;