/* eslint-disable no-unused-vars */
import { Fragment, useCallback, useMemo, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import Sidebar from '../Sidebar';
import logo from '../../assets/logo-insignia.png';
import DashboardContent from '../DashboardContent';

import { navigation } from '../Sidebar';
import OccurenceList from '../OccurrenceList';
import CallAndAdress from '../Steps/CallAndAdress';
import StepsBar from '../StepsBar';
import LocationAndDetails from '../Steps/LocationAndDetails';
import FillerAndOperation from '../Steps/FillerAndOperation';
import Button from '../Button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NewOccurrence() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [steps, setSteps] = useState([
    { id: 1, name: 'Chamado', href: '#', status: 'current' },
    { id: 2, name: 'Solicitante / Resumo', href: '#', status: 'upcoming' },
    { id: 3, name: 'Local', href: '#', status: 'upcoming' },
    // { id: '04', name: 'Preenchedor', href: '#', status: 'upcoming' },
    // { id: '06', name: 'Operação', href: '#', status: 'upcoming' },
    // { id: '07', name: 'Local', href: '#', status: 'upcoming' },
  ]);

  const currentStep = useMemo(() => {
    const [currentStep] = steps.filter((step) => {
      if (step.status === 'current') return step;
    });
    return currentStep;
  }, [steps]);

  const stepsTotal = useMemo(() => steps.length, [steps]);

  const lastStep = useMemo(
    () => currentStep.id === steps.length,
    [currentStep.id, steps],
  );

  const renderStep = useCallback(() => {
    return (
      <>
        {currentStep.id === 1 && <CallAndAdress />}
        {currentStep.id === 2 && <LocationAndDetails />}
        {currentStep.id === 3 && <FillerAndOperation />}
      </>
    );
  }, [currentStep]);

  const handleNextStep = useCallback(() => {
    const newSteps = steps.map((step, index) => {
      if (step.id === currentStep.id) {
        return { ...step, status: 'complete' };
      }

      if (currentStep.id === index) {
        return { ...step, status: 'current' };
      }

      return step;
    });

    setSteps(newSteps);
  }, [steps, currentStep]);

  const handleReturnStep = useCallback(() => {
    const newSteps = steps.map((step) => {
      if (step.id === currentStep.id) {
        return { ...step, status: 'upcoming' };
      }

      if (step.id === currentStep.id - 1) {
        return { ...step, status: 'current' };
      }

      return step;
    });

    setSteps(newSteps);
  }, [steps, currentStep]);

  const handleFinish = useCallback(() => {
    console.log('acabou');
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto mr-2"
                  src={logo}
                  alt="Sparteoli Logo"
                />
                <p className="text-white">Sparteoli</p>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-100 hover:bg-gray-600',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                      )}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-gray-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-gray-700 md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              {/* <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
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
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu> */}
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                {/* <StepsBar steps={steps} />
                {renderStep()} */}
                <DashboardContent />
                {/* <OccurenceList /> */}
                {/* <CallAndAdress />
                <LocationAndDetails />
                <FillerAndOperation /> */}
              </div>
              <div className="flex justify-between my-4">
                {currentStep.id !== 1 ? (
                  <Button name="Retornar" onClick={handleReturnStep} />
                ) : (
                  <div />
                )}
                <Button
                  name={lastStep ? 'Finalizar' : 'Prosseguir'}
                  onClick={lastStep ? handleFinish : handleNextStep}
                />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
