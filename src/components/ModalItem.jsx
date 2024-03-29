import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ImageTile from './ImageTile';

const ModalItem = ({ title, img, invertTitle, children }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleClick() {
    openModal();
  }

  return (
    <>
      {/* <div className="group flex items-center justify-center">
        <button onClick={openModal} className="flex">
          <div className="relative box-border aspect-square w-1/2 flex-auto border-8 border-transparent group-hover:border-8 group-hover:border-white">
            <img src={img} alt="some text" className="object-contain" />
            <div className="absolute inset-0 z-10 text-4xl opacity-0 group-hover:opacity-100">{title}</div>
          </div>
        </button>
      </div> */}
      <ImageTile title={title} img={img} onClick={handleClick} invert={invertTitle} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-fit items-center justify-center py-5 px-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="m-0 w-full transform overflow-hidden text-left align-middle shadow-xl transition-all 2xl:mx-40">
                  {/* <Dialog.Title className="p-3 sm:p-5 md:p-10 text-lg sm:text-2xl md:text-4xl lg:text-6xl text-white">{title}</Dialog.Title> */}
                  <Dialog.Overlay className="h-6 w-6 md:h-12 md:w-12">
                    <button className="group bg-black hover:bg-white" onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="h-6 w-6 hover:stroke-black md:h-12 md:w-12"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Dialog.Overlay>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

ModalItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  invertTitle: PropTypes.bool,
  children: PropTypes.element,
};
export default ModalItem;
