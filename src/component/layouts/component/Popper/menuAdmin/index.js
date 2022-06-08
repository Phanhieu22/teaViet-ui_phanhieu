import Tippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { forwardRef } from 'react';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import styles from './MenuAdmin.module.scss';
import MenuItem from './MenuItems';
const cx = classnames.bind(styles);
const MenuAdmin = forwardRef(({ children, onChange, item }, ref) => {
    return (
        <div ref={ref} className={cx('menu')}>
            <Tippy
                interactive
                offset={[12, 8]}
                placement="left"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <WrapperPopper className={cx('customWrapper')}>
                            <div className={cx('menuItems')}>
                                <Button to={`/admin/edit/${item.slug}`} className={cx('menu-item')}>
                                    Chỉnh sửa{' '}
                                </Button>{' '}
                                <Button className={cx('menu-item')}>Xoá </Button>{' '}
                                <Button className={cx('menu-item')}>Thêm chi tiết</Button>
                            </div>
                        </WrapperPopper>
                    </div>
                )}>
                {children}
            </Tippy>
        </div>
    );
});

export default MenuAdmin;
