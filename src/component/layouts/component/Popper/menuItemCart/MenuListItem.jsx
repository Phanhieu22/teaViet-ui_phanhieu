import Tippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { forwardRef } from 'react';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import MenuItemCart from '.';
import styles from './MenuItemCart.module.scss';
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
                        {items.children.data.length > 0 ? (
                            <WrapperPopper className={cx('customWrapper')}>
                                <div className={cx('menuItems')}>{renderItems()}</div>
                                <div className={cx('payment')}>
                                    <div className={cx('totalMoney')}>
                                        <div>
                                            <h5>Tổng cộng</h5>
                                        </div>
                                        <div>
                                            <h5>
                                                {items.children.data?.reduce(
                                                    (total, currentValue) =>
                                                        total + currentValue.price * currentValue.quality,
                                                    0
                                                )}
                                                đ
                                            </h5>
                                        </div>
                                    </div>
                                    <div className={cx('wrapperBtn')}>
                                        <Button rounded className={cx('btn-gradient')} to="payment">
                                            Tiến hành thanh toán
                                        </Button>
                                    </div>
                                </div>
                            </WrapperPopper>
                        ) : (
                            <WrapperPopper className={cx('customWrapper')}>
                                <h4 className={cx('noItem')}>Không có sản phẩm nào trong giỏ hàng của bạn</h4>
                            </WrapperPopper>
                        )}
                    </div>
                )}>
                <Button icon>{children}</Button>
            </Tippy>
        </div>
    );
});

export default MenuListItem;
