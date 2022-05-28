import styles from './SelectButton.module.scss';
import classnames from 'classnames/bind';
import { useState } from 'react';

const cx = classnames.bind(styles);

function SelectButton({
    children,
    title,
    outline,
    rounded,
    leftIcon,
    rightIcon,
    disabled,
    onClick,
    className,
    ...passProps
}) {
    const [modelDisplay, setModelDisplay] = useState(false);

    let Comp = 'button';

    let props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const handleDisplay = () => {
        setModelDisplay(!modelDisplay);
    };

    return (
        <div>
            <Comp
                className={cx('wrapper', {
                    [className]: className,
                    outline,
                    disabled,
                    rounded,
                })}
                onClick={handleDisplay}>
                {leftIcon && <span className={cx('iconNavItem')}>{leftIcon}</span>}
                <span {...props} className={cx('container')}>
                    <div className={cx('title')}>{title}</div>
                </span>
                {rightIcon && <span className={cx('iconRight')}>{rightIcon}</span>}
            </Comp>
            {modelDisplay && (
                <div className={cx('position')}>
                    {modelDisplay && (
                        <div>
                            <ul onClick={handleDisplay} className={cx('content')}>
                                <span onClick={handleDisplay}>{children}</span>
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SelectButton;
