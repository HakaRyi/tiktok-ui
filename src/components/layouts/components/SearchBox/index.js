import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';
import Wrapper from '~/components/Wapper/Wrapper';
import style from './SearchBox.module.scss';
import { useDebounce } from '~/hooks';
import * as request from '~/utils/axios';

const cx = classNames.bind(style);

function SearchBox() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    const clearHandler = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        request
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                // ?q=${encodeURIComponent(searchValue)}&type=less
                params: {
                    q: searchValue,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchValue.length > 0}
            render={(attrs) => {
                console.log('Tippy render: ', searchResult);
                return (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            {searchResult.length > 0 ? (
                                searchResult.map((item) => {
                                    return <AccountItem key={item.id} data={item} />;
                                })
                            ) : (
                                <span>No results found.</span>
                            )}
                        </Wrapper>
                    </div>
                );
            }}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    placeholder="What to watch..."
                    spellCheck="false"
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-icon')} onClick={clearHandler}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default SearchBox;
