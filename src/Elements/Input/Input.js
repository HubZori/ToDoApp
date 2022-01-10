
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.css';


const Input = ({
    id, className, label, ...attrs
}) => {

    const classes = classNames(
        'input',
        'className',
    );
    return (
        <div className='inputWrapper'>
            {label &&
                <label className='inputLabel' htmlFor={id}>{label}</label>}
            <input
                name={id}
                id={id}
                className={classes}
                {...attrs}
            />
        </div>
    )
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
};

Input.defaultProps = {
    className: '',
    label: '',
}

export default Input;