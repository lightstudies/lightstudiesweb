import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Dropdown({ topLink, links }) {
  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div className="inline-flex w-full justify-center rounded-md font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white">
        <Link to={topLink.link} className="rounded-l-md px-3 py-2 font-medium text-neutral-300 ">
          {topLink.text}
        </Link>
        <Menu.Button className="rounded-r-md py-2 pr-1 hover:bg-neutral-600 hover:text-white">
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
        <Menu.Items className="absolute mt-2 rounded-md bg-neutral-800">
          <div className="py-1">
            {links.map((link) => (
              <Menu.Item key={link.text}>
                {({ active }) => (
                  <Link
                    to={link.link}
                    className={classNames(active ? 'bg-neutral-700' : 'text-neutral-300', 'block px-4 py-2 text-sm')}
                  >
                    {' '}
                    {link.text}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.propTypes = {
  topLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Dropdown;
