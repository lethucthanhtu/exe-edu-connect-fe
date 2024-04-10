import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    Avatar,
    MenuList,
    MenuItem,
} from '@material-tailwind/react';
import { SearchBar } from './searchBar';
import logo from '../assets/edu-connect.svg';
import { capitalize } from '../utils/utils';
import { Link } from 'react-router-dom';

// profile menu component
const profileMenuItems = [
    {
        label: 'My Profile',
        // icon: UserCircleIcon,
    },
    {
        label: 'Edit Profile',
        // icon: Cog6ToothIcon,
    },
    {
        label: 'Inbox',
        // icon: InboxArrowDownIcon,
    },
    {
        label: 'Help',
        // icon: LifebuoyIcon,
    },
    {
        label: 'Sign Out',
        // icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
            <MenuHandler>
                <Button
                    variant='text'
                    color='blue-gray'
                    className='flex items-center gap-1 rounded-full p-0.5 lg:ml-auto'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    <Avatar
                        variant='circular'
                        size='sm'
                        alt='tania andrew'
                        className='border border-gray-900 p-0.5'
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    />
                </Button>
            </MenuHandler>
            <MenuList
                className='p-1 mt-6 shadow-md backdrop-saturate-200 backdrop-blur-2xl'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            >
                {profileMenuItems.map(({ label }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                    ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                                    : ''
                                }`}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            {/* {React.createElement(icon, {
                                className: `sizr ${
                                    isLastItem ? 'text-red-500' : ''
                                }`,
                                strokeWidth: 2,
                            })} */}
                            <Typography
                                as='span'
                                variant='small'
                                className='font-normal'
                                color={isLastItem ? 'red' : 'inherit'}
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [user, setUser] = React.useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    const { t } = useTranslation();
    const home = import.meta.env.VITE_HOME;

    const navItems = [
        { t_name: 'home', url: '/' },
        { t_name: 'courses', url: '#' },
        { t_name: 'about', url: '#' },
        { t_name: 'contact', url: '#' },
    ];

    const navList = (
        <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            {navItems.map(
                ({ t_name, url }, index) => (
                    // publicRoutes.map((route) =>
                    //     route.name !== t_name ? (
                    //         ''
                    //     ) : (
                    <Typography
                        as='li'
                        key={index}
                        variant='small'
                        color='blue-gray'
                        className='p-1 font-normal hover:text-green-300 hover:decoration-green-300'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        <Link
                            // href={route.path}
                            to={`/${t_name}`}
                            className='flex items-center'
                        >
                            {capitalize(t(t_name))}
                        </Link>
                    </Typography>
                )
                // )
            )}
        </ul>
    );

    return (
        <>
            <Navbar
                className='sticky top-0 z-10 h-max max-w-full mb-4 px-4 py-2 lg:px-8 lg:py-2'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            >
                <div className='flex items-center justify-between text-blue-gray-900'>
                    <Typography
                        as='a'
                        href='/'
                        className='mr-4 cursor-pointer font-medium'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        <div className='flex items-center justify-center'>
                            <img
                                className='h-16'
                                src={logo}
                                alt='edu connect'
                            />
                            <div className='hidden lg:inline-block'>
                                Edu Connect
                            </div>
                        </div>
                    </Typography>
                    <div className='mr-4 hidden lg:block'>{navList}</div>
                    <div className='flex items-center gap-4'>
                        <SearchBar />
                        {user ? (
                            <ProfileMenu />
                        ) : (
                            <div className='flex items-center gap-x-1'>
                                <Link to='/login'>
                                    <Button
                                        variant='text'
                                        size='sm'
                                        // color='green'
                                        className='hidden lg:inline-block'
                                        placeholder={undefined}
                                        onPointerEnterCapture={undefined}
                                        onPointerLeaveCapture={undefined}
                                    >
                                        <span>{t('log in')}</span>
                                    </Button>
                                </Link>
                                <Link to='/signup'>

                                    <Button
                                        variant='gradient'
                                        size='sm'
                                        color='green'
                                        className='hidden lg:inline-block'
                                        placeholder={undefined}
                                        onPointerEnterCapture={undefined}
                                        onPointerLeaveCapture={undefined}
                                    >
                                        <span>{t('sign up')}</span>
                                    </Button>
                                </Link>
                            </div>
                        )}

                        <IconButton
                            variant='text'
                            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            {openNav ? (
                                <span className='material-symbols-outlined h-6 w-6'>
                                    close
                                </span>
                            ) : (
                                <span className='material-symbols-outlined h-6 w-6'>
                                    menu
                                </span>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className='flex items-center gap-x-1'>
                        <Button
                            fullWidth
                            variant='text'
                            size='sm'
                            className=''
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            <span>{t('log_in')}</span>
                        </Button>
                        <Button
                            fullWidth
                            variant='gradient'
                            size='sm'
                            className=''
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            <span>{t('sign_up')}</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
        </>
    );
}
