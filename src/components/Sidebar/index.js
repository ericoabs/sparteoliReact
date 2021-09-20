/* eslint-disable no-unused-vars */
import { Disclosure } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';
import logo from '../../assets/logo-insignia.png';

export const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: true, href: '#' },
  {
    name: 'Ocorrências',
    icon: ClipboardListIcon,
    current: false,
    children: [
      { name: 'Nova Ocorrência', href: '#' },
      { name: 'Listar Ocorrência', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  // {
  //   name: 'Calendar',
  //   icon: CalendarIcon,
  //   current: false,
  //   children: [
  //     { name: 'Overview', href: '#' },
  //     { name: 'Members', href: '#' },
  //     { name: 'Calendar', href: '#' },
  //     { name: 'Settings', href: '#' },
  //   ],
  // },
  // {
  //   name: 'Documents',
  //   icon: InboxIcon,
  //   current: false,
  //   children: [
  //     { name: 'Overview', href: '#' },
  //     { name: 'Members', href: '#' },
  //     { name: 'Calendar', href: '#' },
  //     { name: 'Settings', href: '#' },
  //   ],
  // },
  // {
  //   name: 'Reports',
  //   icon: ChartBarIcon,
  //   current: false,
  //   children: [
  //     { name: 'Overview', href: '#' },
  //     { name: 'Members', href: '#' },
  //     { name: 'Calendar', href: '#' },
  //     { name: 'Settings', href: '#' },
  //   ],
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-gray-700 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4 text-white">
        <img className="h-8 w-auto mr-2" src={logo} alt="Sparteoli Logo" />
        <p>Sparteoli</p>
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1 bg-gray-700" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href="#"
                  className={classNames(
                    item.current
                      ? 'bg-gray-600 text-white'
                      : 'bg-gray-700 text-white hover:bg-gray-500 hover:text-white',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md',
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? 'text-white'
                        : 'text-gray-200 group-hover:text-gray-200',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-black text-gray-900'
                          : 'bg-gray-700 text-white hover:bg-gray-500 hover:text-white',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500',
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-200 group-hover:text-gray-200"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md bg-gray-700 text-white hover:bg-gray-500 hover:text-white"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ),
          )}
        </nav>
      </div>
    </div>
  );
}
