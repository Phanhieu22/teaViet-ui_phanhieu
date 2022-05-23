import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import { SearchIcon } from '~/component/icons';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hook';
function Search() {
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
    const clearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResultSearch(false);
    };
    return (
        <div>
            <HeadlessTippy
                visible={showResultSearch && resultSearch.length > 0}
                interactive
                render={(attrs) => (
                    <WrapperPopper>
                        <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
                            <h4 className={cx('accountSearch')}>Accoutns</h4>
                            ket qua
                        </div>
                    </WrapperPopper>
                )}
                onClickOutside={handleHideResult}>
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="bạn cần tìm gì"
                        spellCheck={false}
                        className={cx('searchInput')}
                        onChange={handelChangeInput}
                        value={searchValue}
                        ref={inputRef}
                        onFocus={() => {
                            setShowResultSearch(true);
                        }}
                    />
                    <span className={cx('spanSpliter')}></span>
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
                    <button className={cx('btnIconSearch')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
