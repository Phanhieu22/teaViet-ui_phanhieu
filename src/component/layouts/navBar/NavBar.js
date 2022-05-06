import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InputBase from '@mui/material/InputBase';
import Popover from '@mui/material/Popover';
import { alpha, styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import i18n from '../../../i18n';
import { logoutUser } from '../../../redux/auth/action';
import { selectorAuthState } from '../../../redux/auth/selector';
import { configNavBar } from './index';
import './NavBar.scss';
import NavBarMobile from './NavBarMobile';

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
function NavBar(props) {
    const [languages, setLanguages] = useState('vi');
    const [isSearch, setIsSearch] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    // set state auth cho nav bar
    const authState = useSelector(selectorAuthState);

    // ngôn ngữ cho navbar
    const { t } = useTranslation();
    const id = isSearch ? 'simple-popper' : undefined;
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
    const handleCloseDrawerToggle = () => {
        setMobileOpen(false);
    };
    const dispatch = useDispatch();
    const onUserLogout = () => {
        dispatch(logoutUser.logoutUseRequest());
    };

    const [offset, setOffset] = useState(0);
    const scroll = useRef(null);
    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Box
            ref={scroll}
            style={{ transtion: '1s' }}
            className={offset > 0 ? 'navBarContainer stikcy' : 'navBarContainer'}>
            <Box className="navBarDesktopContainer">
                <Box className="logoBox">
                    <div className="logo">logo</div>
                </Box>
                <Box className="navBarDesktop">
                    <Box className="navBarBox">
                        {/*  lọc các phần tử được hiển thị vào 1 biến rồi mới đưa vào hàm map */}

                        {configNavBar.map((nav, index) => (
                            <Box key={index} className={`${nav.className} navItem`}>
                                <div>
                                    {' '}
                                    <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to={nav.to}>
                                        {t(nav.name)}
                                    </NavLink>
                                </div>{' '}
                            </Box>
                        ))}

                        {authState.isAuthenticated === true ? (
                            <Box className="logout navItem" onClick={onUserLogout}>
                                <div>{t('navBar.logout')}</div>
                            </Box>
                        ) : (
                            <Box className="login navItem">
                                <div>
                                    <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/login">
                                        {t('navBar.login')}
                                    </NavLink>
                                </div>
                            </Box>
                        )}
                        {authState.isAuthenticated && (
                            <Box className="user navItem">
                                <div>
                                    {authState.user.avatar !== true ? (
                                        <img
                                            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
                                            alt="avatar"></img>
                                    ) : (
                                        <img src={authState.user.avatar} alt="avatar"></img>
                                    )}
                                    <p>{authState.user.userName}</p>
                                </div>
                            </Box>
                        )}

                        <Box className="align-item-center ">
                            <PublicIcon />
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
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
                                </div>
                            </Popover>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="navBarBoxMobile">
                <Box
                    component="nav"
                    sx={{ width: { xs: '100%', sm: '60%' }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders">
                    <Box className="navbarMobile">
                        <MenuRoundedIcon onClick={handleDrawerToggle} />
                        <Box className="logo">Logo</Box>
                        <Box className="feature">
                            <Box className="align-item-center searchBox">
                                {' '}
                                <SearchIcon
                                    aria-describedby={id}
                                    onClick={onChangeIsSearch}
                                    color="action searchIcon"
                                />
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
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search>
                                    </div>
                                </Popover>
                            </Box>
                            <Box className="align-item-center ">
                                <PublicIcon />
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

                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleCloseDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        anchor="left"
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
                        }}>
                        <NavBarMobile open={mobileOpen} isClose={handleCloseDrawerToggle} />
                    </Drawer>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleCloseDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        anchor="left"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
                        }}>
                        <NavBarMobile isClose={handleCloseDrawerToggle} />
                    </Drawer>
                </Box>
            </Box>
        </Box>
    );
}

export default NavBar;
