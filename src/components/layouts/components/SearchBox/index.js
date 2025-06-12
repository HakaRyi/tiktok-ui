import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';
import Wrapper from '~/components/Wapper/Wrapper';
import style from './SearchBox.module.scss';

const cx = classNames.bind(style);

function SearchBox() {
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const clearHandler = () => {
        setSearchResult([]);
        setShowResult(false);
        inputRef.current.focus();
    };

    useEffect(() => {
        setSearchResult([1, 2, 3]);
    }, []);

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                    </Wrapper>
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchResult}
                    onChange={(e) => setSearchResult(e.target.value)}
                    type="text"
                    placeholder="What to watch..."
                    spellCheck="false"
                    onFocus={() => setShowResult(true)}
                />
                {!!searchResult && (
                    <button className={cx('clear-icon')} onClick={clearHandler}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default SearchBox;
