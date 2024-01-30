"use client";

import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/vo-logo.png";
import { motion } from "framer-motion";

const menu = [
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-black sticky top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className=" font-bold text-xl text-lightBrown">
          <Link href="/" className="flex items-center">
            <Image height={70} width={70} src={logo} alt="logo" />
            <span className="">VerticalOverseas</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="hidden lg:flex justify-between items-center">
          {menu.map(e => (
            <div key={e.name}>
              <h1 className="text-darkBrown hover:text-lightBrown mx-4 cursor-pointer text-lg">
                {e.name}
              </h1>
            </div>
          ))}
          <div>
            <button className="text-black bg-lightBrown hover:bg-darkBrown hover:text-[#E2D7CE] rounded-lg p-2 text-lg mx-4">
              Book A Consultation
            </button>
          </div>
        </motion.div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open Main Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={closeMenu}>
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-between">
            <Link href="/" className="flex items-center">
              <Image height={50} width={50} src={logo} alt="logo" />
              <span className="sr-only">VerticalOverseas</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={closeMenu}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu.map(e => (
                  <div key={e.name}>
                    <h1 className="text-darkBrown hover:text-lightBrown m-4 cursor-pointer text-lg font-bold">
                      {e.name}
                    </h1>
                  </div>
                ))}
                <div>
                  <button className="text-darkBrown hover:text-lightBrown m-4 mt-10 cursor-pointer text-lg font-bold">
                    Book A Consultation ▶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
