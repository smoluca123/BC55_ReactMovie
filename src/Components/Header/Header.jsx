import React, { useState } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);
  const [isOpenUserNav, setIsOpenUserNav] = useState(false);
  const [navItem, setNavItem] = useState([
    { name: 'Lịch Chiếu', href: '#', current: true },
    { name: 'Cụm Rạp', href: '#', current: false },
    { name: 'Tin Tức', href: '#', current: false },
    { name: 'Ứng Dụng', href: '#', current: false },
  ]);
  const isOverflow = isOpenNavMobile || isOpenUserNav;
  console.log(isOpenNavMobile || isOpenUserNav);
  const handleSelectNavItem = (index) => {
    const newNav = [...navItem];
    navItem.find((nav) => nav.current).current = false;
    newNav[index].current = true;
    setNavItem(newNav);
  };
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
                {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
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
                {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
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
            <div className="flex items-center flex-1 justify-center _sm:flex-[0]  _sm:items-stretch _sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto _sm:max-w-5xl"
                  src="https://demo1.cybersoft.edu.vn/logo.png"
                  alt="Your Company"
                />
              </div>
            </div>
            {/* Navbar */}
            <div className="flex items-center justify-center _sm:items-stretch _sm:justify-start">
              <div className="hidden _sm:ml-6 _sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  {navItem &&
                    navItem.map((item, index) => (
                      <button
                        key={index}
                        href={item.href}
                        className={cn(
                          'rounded-md px-3 py-2 text-sm font-medium hover:text-title-main transition-colors duration-300',
                          item.current
                            ? 'text-title-main bg-secondaryBg-main'
                            : 'text-white'
                        )}
                        onClick={() => {
                          handleSelectNavItem(index);
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
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
                    <div>
                      <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() => setIsOpenUserNav(!isOpenUserNav)}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </button>
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
                      {/* Active: "bg-gray-100", Not Active: "" */}
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                        onClick={() => {
                          setIsLogin(false);
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
                      <button
                        className="rounded-md px-3 py-2 text-sm font-medium text-lightText-main hover:text-white transition duration-500"
                        onClick={() => {
                          setIsLogin(true);
                        }}
                      >
                        Đăng Nhập
                      </button>
                      <button className="rounded-md px-3 py-2 text-sm font-medium text-lightText-main hover:text-white transition duration-500">
                        Đăng Ký
                      </button>
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
                <button
                  key={index}
                  href={item.href}
                  className={cn(
                    'block w-full rounded-md px-3 py-2 text-base font-medium hover:text-title-main transition-colors duration-300',
                    item.current
                      ? 'text-title-main bg-secondaryBg-main'
                      : 'text-white'
                  )}
                  onClick={() => {
                    handleSelectNavItem(index);
                  }}
                >
                  {item.name}
                </button>
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
