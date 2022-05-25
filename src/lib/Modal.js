import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import './Modal.css';

const Modal = ({ children, isOpened, onClose }) => {
	useEffect(() => {
		function handleEscapeKey(e) {
			if (e.code === 'Escape') {
				onClose();
			}
		}
	
		document.addEventListener('keydown', handleEscapeKey)
		return () => document.removeEventListener('keydown', handleEscapeKey)
  	}, []);

    return isOpened ? (
		<div className="modal" onClick={onClose}>
			<div 
				className="modal-content" 
				onClick={e => {
				e.stopPropagation();
			}}>
				<button className="modal-close" onClick={onClose}>
					<span className="modal-sr-only">Close</span>
				</button>
				<div>
					{ children }
				</div>
			</div>
		</div>
    ) : null;
};

Modal.propTypes = {
	children: propTypes.string.isRequired, 
	isOpened: propTypes.bool.isRequired, 
	onClose: propTypes.func.isRequired,
}

export default Modal