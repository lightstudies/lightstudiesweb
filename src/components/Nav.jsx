import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const photoLinks = [
    { text: 'portrait', link: '/photo/portrait' },
    { text: 'real estate', link: '/photo/real-estate' },
    { text: 'underwater', link: '/photo/underwater' },
    { text: 'wedding', link: '/photo/wedding' },
  ];

  const videoLinks = [{ text: 'portrait', link: '/video/portrait' }];

  return (
    <nav className="bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex w-full items-center">
            <div className="mr-auto">
              <span className="text-4xl">light studies.</span>

              {/* LOGO HERE */}
              {/* <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              /> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="rounded-md px-3 py-2 font-medium text-white hover:bg-neutral-700">
                  home
                </Link>

                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
                >
                  about
                </Link>
                <Dropdown topLink={{ text: 'photo', link: '/photo' }} links={photoLinks} />
                <Dropdown topLink={{ text: 'video', link: '/video' }} links={videoLinks} />

                <Link
                  to="/inside-out"
                  className="rounded-md px-3 py-2 font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
                >
                  inside out
                </Link>

                <Link
                  to="/buy"
                  className="rounded-md px-3 py-2 font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
                >
                  buy prints
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div {...ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {/* <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-700">
                    Dashboard
                  </Link> */}

              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                home
              </Link>

              <Link
                to="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                about
              </Link>

              <Link
                to="/photo"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                photo
              </Link>

              <Link
                to="/photo/real-estate"
                className="block rounded-md px-3 py-2 pl-6 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                real estate
              </Link>

              <Link
                to="/photo/underwater"
                className="block rounded-md px-3 py-2 pl-6 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                underwater
              </Link>

              <Link
                to="/photo/wedding"
                className="block rounded-md px-3 py-2 pl-6 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                wedding
              </Link>

              <Link
                to="/photo/portrait"
                className="block rounded-md px-3 py-2 pl-6 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                portrait
              </Link>

              <Link
                to="/video"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                video
              </Link>

              <Link
                to="/video/portrait"
                className="block rounded-md px-3 py-2 pl-6 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                portrait
              </Link>

              <Link
                to="/inside-out"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                inside out
              </Link>

              <Link
                to="/buy"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white"
              >
                buy prints
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
