import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Wrapper from '../Wrapper';

import Tippy from '@tippyjs/react/headless';
import MenuItems from '~/components/MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItems data={item} key={index} />);
    };

    return (
        <Tippy
            interactive
            visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <Wrapper>{renderItem()}</Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
