import styles from '~/components/Wapper/Menu/Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '../Button';

const cx = classNames.bind(styles);

function MenuItems({ data }) {
    return (
        <Button className={cx('item')} to={data.to} left_icon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
