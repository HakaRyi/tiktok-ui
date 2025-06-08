import styles from './ButtonStyle.module.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,
    dissabled = false,
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    left_icon,
    className,
    right_icon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    //Disable cursor event
    if (dissabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx(
        'wrapper',
        {
            primary,
            outline,
            text,
            small,
            large,
        },
        className,
    );

    return (
        <Comp className={classes} {...props}>
            {left_icon && <span className={cx('icon')}>{left_icon}</span>}
            <span className={cx('title')}>{children}</span>
            {right_icon && <span className={cx('icon')}>{right_icon}</span>}
        </Comp>
    );
}

export default Button;
