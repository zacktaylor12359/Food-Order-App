import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = () => {
	return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				document.getElementById('modal-overlay-root')
			)}
		</Fragment>
	);
};
export default Modal;
