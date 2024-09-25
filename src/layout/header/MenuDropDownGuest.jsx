import { Fragment, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition
} from "@headlessui/react";
import LoginRegisterModal from "../../components/Modal/LoginRegisterModal";

function MenuDropDownGuest() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [modal, setModal] = useState(false);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left hover:shadow hover:rounded-full"
    >
      <div className="border rounded-full flex flex-row w-auto py-2 px-4 shadow cursor-pointer">
        <MenuButton
          className="flex flex-row items-center justify-between rounded-full
          w-12 h-6"
        >
          <i className="fa-solid fa-bars text-gray-600 text-[1rem]"></i>
          <i className="fa-solid fa-circle-user text-gray-600 text-[1.6rem]"></i>
        </MenuButton>
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
        <MenuItems
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y
          divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black
          ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <MenuItem>
              {({ isActive }) => (
                <button
                  className={classNames(
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex justify-start px-4 py-2 text-sm font-semibold w-full"
                  )}
                  onClick={() => setModal(true)}
                >
                  Log In
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ isActive }) => (
                <button
                  className={classNames(
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex justify-start px-4 py-2 text-sm w-full"
                  )}
                  onClick={() => setModal(true)}
                >
                  Sign Up
                </button>
              )}
            </MenuItem>
          </div>
          <div className="py-1">
            <MenuItem>
              {({ isActive }) => (
                <a
                  href="#"
                  className={classNames(
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Host your home
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ isActive }) => (
                <a
                  href="#"
                  className={classNames(
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Host an experience
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ isActive }) => (
                <a
                  href="#"
                  className={classNames(
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Help
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
      <div>
        {modal ? <LoginRegisterModal closeModal={() => setModal(false)} /> : ""}
      </div>
    </Menu>
  );
}
export default MenuDropDownGuest;
