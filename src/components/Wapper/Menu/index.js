import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Wrapper from '../Wrapper';

import Tippy from '@tippyjs/react/headless';
import MenuItems from '~/components/MenuItems';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={500}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </Wrapper>
                </div>
            )}
            onHide={() => {
                setHistory(history.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
