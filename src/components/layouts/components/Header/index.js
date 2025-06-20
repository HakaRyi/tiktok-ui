import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import logo from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Wapper/Menu';
import SearchBox from '../SearchBox';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
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
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
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
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
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
                {/* SearchBox  */}
                <SearchBox />

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
