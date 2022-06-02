import Tippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import styles from './MenuAccount.module.scss';
import MenuItem from './MenuItems';
import { forwardRef } from 'react';
const cx = classnames.bind(styles);
const MenuAccount = forwardRef(({ children, items, onChange }, ref) => {
    let isParent = !!items.children;
    const renderItems = () => {
        if (isParent === true) {
            return items.children.data.map((navItem) => (
                <MenuItem onClick={navItem.onclick} key={navItem.id} data={navItem} />
            ));
        }
    };

    return (
        <div ref={ref} className={cx('menu')}>
            <Tippy
                interactive
                offset={[12, 8]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <WrapperPopper className={cx('customWrapper')}>
                            <div className={cx('menuItems')}>{renderItems()}</div>
                        </WrapperPopper>
                    </div>
                )}>
                <Button icon>{children}</Button>
            </Tippy>
        </div>
    );
});

export default MenuAccount;
