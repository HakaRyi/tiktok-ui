import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

import style from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '~/assets/images';
import Wrapper from '~/components/Wapper/Wrapper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Wapper/Menu';

const cx = classNames.bind(style);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const isLoggin = true;
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedbacks and Help',
            to: '/feedbacks',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard',
        },
    ];

    const USER_MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Coins',
        },
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedbacks and Help',
            to: '/feedbacks',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo.logo} alt="TikTok" />
                </div>

                <HeadlessTippy
                    interactive
                    visible
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
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="What to watch..." spellCheck="false" />

                        <button className={cx('clear-icon')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {isLoggin ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('upload_icon')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Menu items={USER_MENU_ITEMS}>
                                <img
                                    className={cx('avartar')}
                                    src="https://media.xtra.com.my/2022/07/handsome-featured.jpg"
                                    alt="avatar"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                            <Menu items={MENU_ITEMS}>
                                <button className={cx('more_icon')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
