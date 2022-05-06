import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import i18n from '../../../i18n';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import { configSubNavBar } from './index';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectorAuthState } from '../../../redux/auth/selector';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',

    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
function NavBarMobile({ isClose, open }) {
    const [languages, setLanguages] = useState('vi');

    const [isSearch, setIsSearch] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const handleChange = (event, newLanguages) => {
        setLanguages(newLanguages);
        changeLanguage(newLanguages);
    };
    const onChangeIsSearch = (event) => {
        setIsSearch(!isSearch);
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(true);
    };

    const id = isSearch ? 'simple-popper' : undefined;
    const { t } = useTranslation();
    const authState = useSelector(selectorAuthState);
    return (
        <div className="subNavWrap">
            <Box className="subNavBarMobile">
                <CloseIcon onClick={isClose} />
                <Box className="subNavFeature">
                    <Box className="align-item-center searchBox">
                        {' '}
                        <SearchIcon aria-describedby={id} onClick={onChangeIsSearch} color="action searchIcon" />
                        <Popover
                            id={id}
                            open={isSearch}
                            anchorEl={anchorEl}
                            style={{ margin: '10px 0' }}
                            onClose={onChangeIsSearch}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}>
                            <div className="searchContent">
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon
                                            aria-describedby={id}
                                            onClick={onChangeIsSearch}
                                            color="action searchIcon"
                                        />
                                    </SearchIconWrapper>
                                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                                </Search>
                            </div>
                        </Popover>
                    </Box>

                    <Box className="align-item-center ">
                        <ToggleButtonGroup
                            className="changeLanguages"
                            onChange={handleChange}
                            color="primary"
                            value={languages}
                            aria-label="text alignment"
                            exclusive>
                            <ToggleButton value="en">En</ToggleButton>
                            <ToggleButton value="vi">Vi</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Box>
            </Box>
            <Box className="subNavItemContainer">
                {configSubNavBar.map((nav, index) => (
                    <Box key={index} className={`${nav.className} subNavItem`}>
                        <div>
                            {' '}
                            <NavLink onClick={isClose} to={nav.to}>
                                {t(nav.name)}
                            </NavLink>
                        </div>
                    </Box>
                ))}
                {authState.isAuthenticated === true ? (
                    <Box className="logout subNavItem">
                        <div>
                            <NavLink
                                onClick={isClose}
                                className={(navData) => (navData.isActive ? 'active' : '')}
                                to="">
                                {t('navBar.logout')}
                            </NavLink>
                        </div>
                    </Box>
                ) : (
                    <Box className="login subNavItem">
                        <div>
                            <NavLink
                                onClick={isClose}
                                className={(navData) => (navData.isActive ? 'active' : '')}
                                to="/login">
                                {t('navBar.login')}
                            </NavLink>
                        </div>
                    </Box>
                )}
            </Box>
        </div>
    );
}

export default NavBarMobile;
