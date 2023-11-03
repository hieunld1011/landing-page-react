import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import defaultAvatar from '../../../assets/images/default_avatar.jpg';

const DropdownBar: React.FC = () => {
  const { username } = JSON.parse(sessionStorage.getItem('information') || '{}');

  const logout = () => {
    sessionStorage.setItem('login', 'false');
  };

  return (
    <Menu as={'div'} className='pl-[22px]'>
      <div className='cursor-pointer' aria-expanded='true' aria-haspopup='true'>
        <Menu.Button className={'center bg-transparent cursor-pointer'}>
          <img src={defaultAvatar} alt={username} className='login_image' />
          <ChevronDownIcon className='login_icon' aria-hidden='true' />
        </Menu.Button>
      </div>
      <Transition
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='dropdown_container mt-2'>
          <div className='py-1 flex flex-col'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/profile'
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block px-4 py-2`}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type='submit'
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block px-4 py-2 text-left cursor-pointer`}
                  onClick={() => logout()}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownBar;
