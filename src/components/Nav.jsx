import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuState, setSubMenuState] = useState({
    photo: false,
    video: false,
  });

  const topLevelLinkClasses =
    'rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-300 hover:text-current dark:text-white dark:hover:bg-neutral-700';

  const smallScreenLinkClasses =
    'block rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-300 hover:text-black dark:text-white dark:hover:bg-neutral-700';

  const smallScreenDivLinkClasses =
    'inline-flex w-full rounded-md text-neutral-700 hover:bg-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white';

  const smallScreenBtnClasses =
    'w-full rounded-r-md py-2 pr-1 hover:bg-neutral-400 hover:text-black dark:hover:bg-neutral-600 dark:hover:text-white';

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
    <nav className="bg-neutral-200 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex w-full items-center">
            <div className="mr-auto">
              {/* logo/name */}
              <Link to="/" className="text-4xl">
                light studies.
              </Link>

              {/* LOGO HERE */}
              {/* <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              /> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={topLevelLinkClasses}>
                  home
                </Link>

                <Link to="/about" className={topLevelLinkClasses}>
                  about
                </Link>
                <Dropdown topLink={{ text: 'photo', link: '/photo' }} links={photoLinks} />
                <Dropdown topLink={{ text: 'video', link: '/video' }} links={videoLinks} />

                <Link to="/inside-out" className={topLevelLinkClasses}>
                  inside out
                </Link>

                <Link
                  to="https://spires.pic-time.com/-prints3168/gallery"
                  target="_blank"
                  className={topLevelLinkClasses}
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
              className="inline-flex items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-700 hover:bg-neutral-300 hover:text-current focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-offset-gray-800"
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
                className="block rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-300 hover:text-current dark:text-white dark:hover:bg-neutral-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                home
              </Link>

              <Link to="/about" className={smallScreenLinkClasses} onClick={() => setIsOpen(!isOpen)}>
                about
              </Link>

              <div className={smallScreenDivLinkClasses}>
                <Link to="/photo" className={smallScreenLinkClasses} onClick={() => setIsOpen(!isOpen)}>
                  photo
                </Link>
                <button className={smallScreenBtnClasses} onClick={() => handlePhotoClick()}>
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
                  <Link
                    to="/photo/real-estate"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    real estate
                  </Link>

                  <Link
                    to="/photo/underwater"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    underwater
                  </Link>

                  <Link
                    to="/photo/wedding"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    wedding
                  </Link>

                  <Link
                    to="/photo/portrait"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    portrait
                  </Link>
                </div>
              )}

              <div className={smallScreenDivLinkClasses}>
                <Link to="/video" className={smallScreenLinkClasses} onClick={() => setIsOpen(!isOpen)}>
                  video
                </Link>
                <button className={smallScreenBtnClasses} onClick={() => handleVideoClick()}>
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
                  <Link
                    to="/video/fiction"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    fiction
                  </Link>

                  <Link
                    to="/video/non-fiction"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    non fiction
                  </Link>

                  <Link
                    to="/video/aerial-abstract"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    aerial + abstract
                  </Link>

                  <Link
                    to="/video/commercial"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    commercial
                  </Link>

                  <Link
                    to="/video/music"
                    className={`${smallScreenLinkClasses} pl-6`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    music
                  </Link>
                </div>
              )}

              <Link to="/inside-out" className={smallScreenLinkClasses} onClick={() => setIsOpen(!isOpen)}>
                inside out
              </Link>

              <Link
                to="https://spires.pic-time.com/-prints3168/gallery"
                target="_blank"
                className={smallScreenLinkClasses}
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
