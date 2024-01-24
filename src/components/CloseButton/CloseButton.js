import { Link } from "react-router-dom";

import closeButton from '../../images/close-button.svg';

import './CloseButton.css';

const CloseButton = ({ className = '' }) => {
    return (
        <Link to={'/'}>
            <button className={`projectPopup__close-button ${className}`} type='button'>
                <img className='projectPopup__close-button-image' src={closeButton} alt='close button'></img>
            </button>
        </Link>
    )
}

export default CloseButton;