import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';

import { signOut } from '../../modules/user/slices/authSlice';
import Swal from 'sweetalert2';
import CustomNavLink from './CustomUI/CustomNavLink';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);
  const [isOpenUserNav, setIsOpenUserNav] = useState(false);
  const [navItem, setNavItem] = useState([
    { name: 'Lịch Chiếu', href: '/', current: false },
    { name: 'Cụm Rạp', href: '#showtimes', current: false },
    { name: 'Tin Tức', href: '/tintuc', current: false },
    { name: 'Ứng Dụng', href: '/ungdung', current: false },
  ]);
  const { currentUser } = useSelector((state) => state.auth);
  const isOverflow = isOpenNavMobile || isOpenUserNav;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(signOut());
    Swal.fire({
      icon: 'success',
      title: 'Đăng xuất thành công',
      showConfirmButton: false,
      timer: 1000,
    });
    // window.location.replace('/');
  };

  useEffect(() => {
    setIsLogin(!!currentUser);
  }, [currentUser]);

  return (
    <div className="fixed top-0 z-[998] w-full h-auto">
      <nav className="bg-mainBg-main ">
        <div className="mx-auto  px-2 _sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-around _sm:justify-between">
            {/* Btn Toggle mobile nav */}
            <div className="absolute inset-y-0 left-0 flex items-center _sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsOpenNavMobile(!isOpenNavMobile)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>

                <svg
                  className={cn(
                    !isOpenNavMobile ? 'block' : 'hidden',
                    'h-6 w-6'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className={cn(
                    isOpenNavMobile ? 'block' : 'hidden',
                    'h-6 w-6'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center flex-1 justify-center _sm:flex-[0]  _sm:items-stretch _sm:justify-start  min-w-[180px]">
              <div className="flex flex-shrink-0 items-center">
                <Link to={'/'}>
                  <img
                    className="h-8 w-auto _sm:max-w-5xl"
                    src="https://demo1.cybersoft.edu.vn/logo.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
            </div>
            {/* Navbar */}
            <div className="flex items-center justify-center _sm:items-stretch _sm:justify-start">
              <div className="hidden _sm:ml-6 _sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  {navItem &&
                    navItem.map((item, index) => {
                      const result = item.href.includes('#') ? (
                        <LinkScroll
                          className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-title-main transition-colors duration-300 cursor-pointer"
                          to={item.href.replace('#', '')}
                          key={index}
                          smooth={true}
                        >
                          {item.name}
                        </LinkScroll>
                      ) : (
                        <NavLink
                          key={index}
                          to={item.href}
                          className={({ isActive, isPending }) =>
                            cn(
                              'rounded-md px-3 py-2 text-sm font-medium hover:text-title-main transition-colors duration-300',
                              {
                                'text-title-main bg-secondaryBg-main': isActive,
                                'text-white': !isActive && !isPending,
                              }
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      );
                      return result;
                    })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex justify-end items-center pr-2 _sm:static _sm:inset-auto _sm:ml-6 _sm:pr-0 min-w-[180px]">
              {isLogin ? (
                <>
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-3">
                    <div
                      className="flex justify-center items-center cursor-pointer"
                      onClick={() => setIsOpenUserNav(!isOpenUserNav)}
                    >
                      <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={currentUser && currentUser.avatar}
                        />
                      </button>
                      {currentUser && (
                        <Typography
                          className="pl-2 text-lightText-main hidden sm:block"
                          variant="small"
                        >
                          {currentUser.hoTen}
                        </Typography>
                      )}
                    </div>
                    <div
                      className={cn(
                        'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100',
                        {
                          hidden: !isOpenUserNav,
                        }
                      )}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      {currentUser && (
                        <Typography
                          className="pl-2 py-2 text-mainBg-main block text-center border-b-blue-gray-900 border-b-[1px] sm:hidden"
                          variant="small"
                        >
                          {currentUser.hoTen}
                        </Typography>
                      )}

                      <CustomNavLink
                        to="/profile"
                        _className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Your Profile
                      </CustomNavLink>

                      <CustomNavLink
                        to="user/history"
                        _className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Lịch sử đặt vé
                      </CustomNavLink>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative _sm:max-w-5xl _sm:static">
                    <FontAwesomeIcon
                      icon="fa-regular fa-user"
                      className="text-lightText-main rounded-fulltransition duration-300 w-5 h-5 p-4 cursor-pointer _sm:hidden"
                      onClick={() => setIsOpenUserNav(!isOpenUserNav)}
                    />

                    <div
                      className={cn(
                        'absolute top-0, right-0 w-[120px] bg-gray-800 _sm:static _sm:flex _sm:bg-transparent _sm:w-auto z-10',
                        { hidden: !isOpenUserNav }
                      )}
                    >
                      <NavLink
                        className={({ isActive, isPending }) =>
                          cn(
                            'rounded-md px-3 py-2 text-sm font-medium text-lightText-main hover:text-white transition duration-300 block',
                            {
                              'text-title-main bg-secondaryBg-main': isActive,
                            }
                          )
                        }
                        to="/user/login"
                      >
                        Đăng Nhập
                      </NavLink>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          cn(
                            'rounded-md px-3 py-2 text-sm font-medium text-lightText-main hover:text-white transition duration-300 block',
                            {
                              'text-title-main bg-secondaryBg-main': isActive,
                            }
                          )
                        }
                        to="/user/signup"
                      >
                        Đăng Ký
                      </NavLink>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={cn({
            hidden: !isOpenNavMobile,
          })}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            {navItem &&
              navItem.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  // className={cn(
                  //   'block w-full rounded-md px-3 py-2 text-base font-medium hover:text-title-main transition-colors duration-300',
                  //   item.current
                  //     ? 'text-title-main bg-secondaryBg-main'
                  //     : 'text-white'
                  // )}
                  className={({ isActive, isPending }) =>
                    cn(
                      'text-center block w-full rounded-md px-3 py-2 text-base font-medium hover:text-title-main transition-colors duration-300',
                      {
                        'text-title-main bg-secondaryBg-main': isActive,
                        'text-white': !isActive && !isPending,
                      }
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
          </div>
        </div>
      </nav>
      <div
        className={cn(
          'fixed overlay h-[100vh] w-[100vw] top-0 left-0 right-0 bottom-0 bg-transparent z-[-1]',
          {
            hidden: !isOverflow,
          }
        )}
        onClick={(e) => {
          setIsOpenNavMobile(false);
          setIsOpenUserNav(false);
        }}
      ></div>
    </div>
  );
}
