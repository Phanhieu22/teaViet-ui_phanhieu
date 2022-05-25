import Tippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { forwardRef } from 'react';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import styles from './MenuItemCart.module.scss';
import MenuItemCart from '.';
const cx = classnames.bind(styles);
const MenuListItem = forwardRef(({ children, items, onChange }, ref) => {
    let isParent = !!items.children;
    const renderItems = () => {
        if (isParent === true) {
            return items.children.data.map((navItem) => <MenuItemCart key={navItem.id} data={navItem} />);
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
                            <div className={cx('memuItems')}>{renderItems()}</div>
                            <div className={cx('payment')}>
                                <div className={cx('totalMoney')}>
                                    <div>
                                        <h5>Tổng cộng</h5>
                                    </div>
                                    <div>
                                        <h5>550.000đ</h5>
                                    </div>
                                </div>
                                <div className={cx('wrapperBtn')}>
                                    <Button rounded className={cx('btn-gradient')} to="payment">
                                        Tiến hành thanh toán
                                    </Button>
                                </div>
                            </div>
                        </WrapperPopper>
                    </div>
                )}>
                <Button icon>{children}</Button>
            </Tippy>
        </div>
    );
});

export default MenuListItem;
