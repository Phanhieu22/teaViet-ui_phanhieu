import styles from './SelectButton.module.scss';
import classnames from 'classnames/bind';
import { useState } from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

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
    menuFooter,
    className,
    key,
    ...passProps
}) {
    const [modelDisplay, setModelDisplay] = useState(false);

    let Comp = 'button';

    let props = {
        onClick,
        key: key,
        disabled,
        outline,
        rounded,
        title,
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

    const handleEffectClose = (modelDisplay) => {
        if (modelDisplay) {
            return 'height150';
        }
    };
    return (
        <List className={cx('wrapper', outline, rounded)} component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleDisplay}>
                <ListItemText primaryTypographyProps={{ fontSize: '1.2em' }} primary={title} />
                {modelDisplay ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse onClick={handleDisplay} in={modelDisplay} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </List>
    );
}

export default SelectButton;
