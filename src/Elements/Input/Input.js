
import PropTypes from 'prop-types';
import classNames from 'classnames';
import c from './Input.module.css';


const Input = ({
    id, name, onChange, className, label, error, required, ...attrs
}) => {



    const classes = classNames(
        'input',
        className,
        { error },
    );
    return (
        <div className={c.inputWrapper}>
            {label &&
                <label htmlFor={id}>{label}</label>}
            <input
                onChange={onChange}
                id={id}
                name={name}
                className={classes}
                {...attrs}
            />
            {error &&
                <span>{error}</span>
            }
        </div>
    )
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};

Input.defaultProps = {
    className: '',
    label: '',
    error: '',
}

export default Input;