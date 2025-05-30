import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '~/assets/images';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo.logo} alt="TikTok" />
                </div>

                <div className={cx('search')}>
                    <input type="text" placeholder="What to watch..." spellCheck="false" />
                    <button>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
