'use client';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { useState } from 'react';
import { BsStar, BsStarFill, BsPlus } from "react-icons/bs";

export default function Cofre() {
  const [menuOptions, setMenuOptions] = useState(false);
  const [star, setStar] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 drop-shadow-xl dark:bg-gray-900 fixed top-0 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Logo altura="50" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nisipass</span>
          </Link>
          <div className="flex items-center md:order-2">
            <div className="inline-flex items-center p-2 ml-1 text-sm cursor-pointer text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setMenuOptions(!menuOptions)}>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </div>
          </div>
          <div className={`items-center justify-between ${menuOptions === false ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1" id="mobile-menu-2`}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:items-center dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500">Home</Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Favoritos</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Configurações</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
              </li>
              <li>
                <a href="#" className="hidden md:flex md:p-2 md:bg-violet-800 md:text-white md:rounded-md">Novo Cofre <BsPlus className="text-2xl" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto my-5 p-2 mt-24">

        <div className='mb-5 md:hidden'>
          <div className="bg-violet-700 p-3 rounded-md text-white flex justify-center items-center cursor-pointer font-semibold">
            Novo cofre <BsPlus className="text-3xl" />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="border border-violet-400 rounded-lg p-2 shadow-xl">
            <div className="flex text-3xl font-semibold text-yellow-400 items-center">
              <span className="text-violet-900">Banco</span>
              <div className={`flex-1 flex justify-end text-2xl cursor-pointer transition duration-200`} onClick={() => setStar(!star)}>
                {star ? <BsStarFill /> : <BsStar />}
              </div>
            </div>
            <hr />
            <div className="mt-3 bg-violet-700 text-center rounded-md py-1 text-white cursor-pointer">
              Acessar
            </div>
          </div>

        </div>
        
      </div>

      <footer class="bg-white dark:bg-gray-900 fixed bottom-0 w-full border border-t">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
              <Logo altura="50" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nisipass</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}
