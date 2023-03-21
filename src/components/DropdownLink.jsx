import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Transition } from '@headlessui/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

function DropdownLink({ topLink, links }) {
  const location = useLocation();
  return (
    <Menu as="div" className="relative z-40 inline-block">
      <div
        className={
          location.pathname.split('/')[1] === topLink.path.split('/')[1]
            ? 'inline-flex w-full justify-center dark:bg-neutral-700 dark:text-white'
            : 'inline-flex w-full justify-center dark:hover:bg-neutral-700 dark:hover:text-white'
        }
      >
        <Link to={topLink.path} className="px-3 py-4">
          {topLink.text}
        </Link>
        <Menu.Button className="py-2 pr-1 dark:hover:bg-neutral-600 dark:hover:text-white">
          <svg
            className="ml-1 w-6 self-center"
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
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute min-w-max bg-neutral-800">
          <div>
            {links.map((link) => (
              <Menu.Item key={link.text} className="block px-4 py-2 text-2xl">
                <NavLink
                  to={link.link}
                  className={
                    location.pathname === link.link
                      ? ' dark:bg-neutral-700 dark:text-white'
                      : ' dark:hover:bg-neutral-700 dark:hover:text-white'
                  }
                >
                  {link.text}
                </NavLink>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

DropdownLink.propTypes = {
  topLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DropdownLink;
