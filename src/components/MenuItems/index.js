import styles from '~/components/Wapper/Menu/Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '../Button';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const classes = cx('item', {
        separate: data.separate,
        link: data.to,
    });
    return (
        <Button className={classes} to={data.to} left_icon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
