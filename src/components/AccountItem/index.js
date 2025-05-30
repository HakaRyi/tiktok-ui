import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avartar')} src="https://media.xtra.com.my/2022/07/handsome-featured.jpg" alt="avatar" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>Hoang Phuc</h4>
                <span className={cx('username')}>hoangphuc0401</span>
            </div>
        </div>
    );
}

export default AccountItem;
