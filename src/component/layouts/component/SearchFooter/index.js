import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import { useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { SearchIcon } from '~/component/icons';
import { useDebounce } from '~/hook';
import styles from './SearchFooter.module.scss';
function SearchFooter() {
    const [searchValue, setSearchValue] = useState('');
    const cx = className.bind(styles);
    const [resultSearch, setResultSearch] = useState([]);
    const [showResultSearch, setShowResultSearch] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);

    const handelChangeInput = (e) => {
        setSearchValue(e.target.value);
    };
    const clearInput = (e) => {
        e.preventDefault();
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div className={cx('search')}>
            <input
                type="text"
                placeholder="Nhập gmail của bạn"
                spellCheck={false}
                className={cx('searchInput')}
                onChange={handelChangeInput}
                value={searchValue}
                ref={inputRef}
                onFocus={() => {
                    setShowResultSearch(true);
                }}
            />

            {!!searchValue && !loading && (
                <div onClick={clearInput} className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
            )}
            {loading && (
                <div className={cx('loading')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </div>
            )}

            <button className={cx('btnIconSearch')}>Đăng ký</button>
        </div>
    );
}

export default SearchFooter;
