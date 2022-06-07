import styles from './InputField.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function InputField2({ handelChangeInput, valueInput, width, placeholder, type = 'text', name }) {
    const [loading, setLoading] = useState(false);
    return (
        <div style={{ width: `${width}px` }} className={cx('search')}>
            <input
                type={type}
                placeholder={placeholder}
                spellCheck={false}
                className={cx('searchInput')}
                name={name}
                onChange={handelChangeInput}
                value={valueInput}
                // ref={inputRef}
            />
        </div>
    );
}

export default InputField2;
