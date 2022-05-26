import Tippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { forwardRef } from 'react';
import Button from '~/component/Button';
import { Wrapper as WrapperPopper } from '~/component/layouts/component/Popper';
import MenuItemSearch from './MenuItemSearch';
import styles from './PopperSearch.module.scss';
const cx = classnames.bind(styles);
const PopperSearch = forwardRef(({ children, items, onChange }, ref) => {
    // logic change language
    const handlerChangeLanguage = (item) => {
        console.log(item);
    };

    return (
        <div ref={ref} className={cx('menu')}>
            <Tippy
                interactive
                offset={[12, 8]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <div className={cx('memuItems')}>
                            <MenuItemSearch data={items} />
                        </div>
                    </div>
                )}>
                <Button icon>{children}</Button>
            </Tippy>
        </div>
    );
});

export default PopperSearch;
