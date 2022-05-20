import propTypes from 'prop-types'
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, isOpened, onClose, style }) => {
	useEffect(() => {
		function handleEscapeKey(e) {
			if (e.code === 'Escape') {
				onClose();
			}
		}
	
		document.addEventListener('keydown', handleEscapeKey)
		return () => document.removeEventListener('keydown', handleEscapeKey)
  	}, [])

    return (
		isOpened && (
			<div className="modal" onClick={onClose}>
				<div 
					className="modal-content" 
					style={style} onClick={e => {
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
		)
    );
};

Modal.propTypes = {
	children: propTypes.object, 
	isOpened: propTypes.bool, 
	onClose: propTypes.func,
}

export default Modal