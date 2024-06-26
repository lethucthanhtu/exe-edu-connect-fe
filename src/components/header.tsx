import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
  Tabs,
  TabsHeader,
  Tab,
} from '@material-tailwind/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SearchBar } from './searchBar';

import Logo from './logo';

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

type TNavItem = {
  tName: string;
  value?: string;
  path?: string;
};

const navItems: TNavItem[] = [
  { value: 'home', tName: 'home', path: '/' },
  { value: 'courses', tName: 'courses', path: 'course' },
  { value: 'about', tName: 'about', path: '' },
  { value: 'contact', tName: 'contact', path: '' },
];

/**
 * profile menu sub-component
 * @returns JSX.Element
 */
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
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : ''
              }`}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* {React.createElement(icon, {
                                className: `size ${
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

/** */
function AnimatedNav() {
  const { t } = useTranslation();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(
    location.pathname.replace('/', '') || navItems[0].value
  );

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className='mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 capitalize rounded-none bg-transparent gap-8'
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-primary shadow-none rounded-none',
        }}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {navItems.map(({ value, tName, path }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`w-auto ${activeTab === value && 'text-primary'}`}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <NavLink to={`${path || tName}`} className='flex items-center'>
              {t(value || tName)}
            </NavLink>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}

/**
 * nav list sub-component
 * @returns JSX.Element
 */
function NavList() {
  const { t } = useTranslation();
  return (
    <>
      <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 capitalize'>
        {navItems.map(({ value: name, tName, path }, index) => (
          <Typography
            as='li'
            key={index}
            variant='small'
            color='blue-gray'
            className='p-1 font-normal hover:text-primary hover:decoration-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <NavLink
              to={`${path || tName}`}
              className='flex items-center aria-[current=page]:text-primary aria-[current=page]:underline aria-[current=page]:underline-offset-8 aria-[current=page]:decoration-2'
            >
              {t(name || tName)}
            </NavLink>
          </Typography>
        ))}
      </ul>
    </>
  );
}

/**
 * header component
 * @returns JSX.Element
 */
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const { t } = useTranslation();

  return (
    <>
      <Navbar
        className='sticky top-0 z-max h-max max-w-full px-4 py-2 lg:px-8 lg:py-2'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <section className='flex items-center justify-between text-blue-gray-900'>
          <Logo />
          <div className='mr-4 hidden lg:block'>
            <AnimatedNav />
            {/* <NavList /> */}
          </div>
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
                    size='sm'
                    className='hidden lg:inline-block bg-primary'
                    placeholder={t('sign up')}
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
              className='ml-auto size-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {openNav ? (
                <span className='material-symbols-outlined size-6'>close</span>
              ) : (
                <span className='material-symbols-outlined size-6'>menu</span>
              )}
            </IconButton>
          </div>
        </section>
        <Collapse open={openNav}>
          <NavList />
          <div className='flex justify-center items-center w-full gap-x-1'>
            <Link to='/login' className='w-full'>
              <Button
                fullWidth
                variant='text'
                size='sm'
                className='w-full'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span>{t('log in')}</span>
              </Button>
            </Link>
            <Link to='/signup' className='w-full'>
              <Button
                fullWidth
                size='sm'
                className='bg-primary w-full'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span>{t('sign up')}</span>
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
