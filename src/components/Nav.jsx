import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';
import DropdownLink from './DropdownLink';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuState, setSubMenuState] = useState({
    photo: false,
    video: false,
  });

  const handlePhotoClick = () => {
    setSubMenuState({ ...subMenuState, photo: !subMenuState.photo });
  };

  const handleVideoClick = () => {
    setSubMenuState({ ...subMenuState, video: !subMenuState.video });
  };

  const photoLinks = [
    { text: 'portrait', link: '/photo/portrait' },
    { text: 'real estate', link: '/photo/real-estate' },
    { text: 'underwater', link: '/photo/underwater' },
    { text: 'wedding', link: '/photo/wedding' },
  ];

  const videoLinks = [
    { text: 'fiction', link: '/video/fiction' },
    { text: 'non fiction', link: '/video/non-fiction' },
    { text: 'aerial + abstract', link: '/video/aerial-abstract' },
    { text: 'commercial', link: '/video/commercial' },
    { text: 'music', link: '/video/music' },
  ];

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 text-neutral-200 sm:px-6 lg:px-0">
        <div className="flex h-16 items-stretch">
          <div className="flex w-full items-stretch">
            <div className="mr-auto self-center">
              {/* logo/name */}
              <Link to="/" className="whitespace-nowrap text-4xl dark:text-white">
                light studies.
              </Link>

              {/* LOGO HERE */}
              {/* <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              /> */}
            </div>
            <div className="hidden md+:block">
              <div className="ml-10 flex space-x-4 text-2xl">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'px-3 py-4 dark:bg-neutral-700 dark:text-white'
                      : 'px-3 py-4 dark:hover:bg-neutral-700 dark:hover:text-white'
                  }
                >
                  home
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? 'px-3 py-4 dark:bg-neutral-700 dark:text-white'
                      : 'px-3 py-4 dark:hover:bg-neutral-700 dark:hover:text-white'
                  }
                >
                  about
                </NavLink>
                <DropdownLink topLink={{ text: 'photo', path: '/photo' }} links={photoLinks} />
                <DropdownLink topLink={{ text: 'video', path: '/video' }} links={videoLinks} />

                <NavLink
                  to="/inside-out"
                  className={({ isActive }) =>
                    isActive
                      ? 'px-3 py-4 dark:bg-neutral-700 dark:text-white'
                      : 'px-3 py-4 dark:hover:bg-neutral-700 dark:hover:text-white'
                  }
                >
                  inside out
                </NavLink>

                <Link
                  to="https://spires.pic-time.com/-prints3168/gallery"
                  target="_blank"
                  className="whitespace-nowrap px-3 py-4 dark:hover:bg-neutral-700 dark:hover:text-white"
                >
                  buy prints
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md+:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center bg-neutral-900 p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white "
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
        className="fixed left-0 z-50 w-full bg-neutral-900"
      >
        {(ref) => (
          <div className="md+:hidden" id="mobile-menu">
            <div {...ref} className="space-y-1 px-2 pt-2 pb-3 text-2xl sm:px-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'block bg-neutral-700 px-3 py-2 text-white'
                    : 'block px-3 py-2 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'block bg-neutral-700 px-3 py-2 text-white'
                    : 'block px-3 py-2 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                about
              </NavLink>

              <div className="inline-flex w-full text-neutral-300 hover:bg-neutral-700 hover:text-white">
                <NavLink
                  to="/photo"
                  className={({ isActive }) =>
                    isActive
                      ? 'block bg-neutral-700 px-3 py-2 text-white'
                      : 'block px-3 py-2 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                  }
                  onClick={() => setIsOpen(!isOpen)}
                >
                  photo
                </NavLink>
                <button
                  className="w-full py-2 pr-1 hover:bg-neutral-600 hover:text-white"
                  onClick={() => handlePhotoClick()}
                >
                  <svg
                    className="ml-1 h-4 w-4 self-center"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              {subMenuState?.photo && (
                <div>
                  <NavLink
                    to="/photo/real-estate"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    real estate
                  </NavLink>

                  <NavLink
                    to="/photo/underwater"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    underwater
                  </NavLink>

                  <NavLink
                    to="/photo/wedding"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    wedding
                  </NavLink>

                  <NavLink
                    to="/photo/portrait"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    portrait
                  </NavLink>
                </div>
              )}

              <div className="inline-flex w-full text-neutral-300 hover:bg-neutral-700 hover:text-white">
                <NavLink
                  to="/video"
                  className={({ isActive }) =>
                    isActive
                      ? 'block bg-neutral-700 px-3 py-2 text-white'
                      : 'block px-3 py-2 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                  }
                  onClick={() => setIsOpen(!isOpen)}
                >
                  video
                </NavLink>
                <button
                  className="w-full py-2 pr-1 hover:bg-neutral-600 hover:text-white"
                  onClick={() => handleVideoClick()}
                >
                  <svg
                    className="ml-1 h-4 w-4 self-center"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              {subMenuState?.video && (
                <div>
                  <NavLink
                    to="/video/fiction"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    fiction
                  </NavLink>

                  <NavLink
                    to="/video/non-fiction"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    non fiction
                  </NavLink>

                  <NavLink
                    to="/video/aerial-abstract"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    aerial + abstract
                  </NavLink>

                  <NavLink
                    to="/video/commercial"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    commercial
                  </NavLink>

                  <NavLink
                    to="/video/music"
                    className={({ isActive }) =>
                      isActive
                        ? 'block bg-neutral-700 px-3 py-2 pl-6 text-white'
                        : 'block px-3 py-2 pl-6 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    music
                  </NavLink>
                </div>
              )}

              <NavLink
                to="/inside-out"
                className={({ isActive }) =>
                  isActive
                    ? 'block bg-neutral-700 px-3 py-2 text-white'
                    : 'block px-3 py-2 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                inside out
              </NavLink>

              <Link
                to="https://spires.pic-time.com/-prints3168/gallery"
                target="_blank"
                className="block px-3 py-2 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
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
