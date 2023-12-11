"use client"

import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import { ChevronDown, UserRound } from "lucide-react";

function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >

                <a href="#" className="flex gap-1 items-center">
                    Buy a watch<ChevronDown strokeWidth={1} size={20} />
                </a>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <a href="#" className="flex gap-1 items-center">
                    Sell a watch<ChevronDown strokeWidth={1} size={20} />
                </a>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <a href="#" className="flex items-center">
                    Watch collections
                </a>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <a href="#" className="flex items-center">
                    About us
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="max-w-full rounded-none px-5 lg:px-20">
            <div className=" flex items-center justify-between text-blue-gray-900">
                <h1 className="font-logoFont text-[2.5rem]">VintageWatch</h1>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden lg:flex items-center gap-1">
                    <UserRound size={20} strokeWidth={1} />
                    <h2>Log in or register</h2>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span className="flex items-center gap-1 justify-center">
                                <UserRound size={20} strokeWidth={1} />
                                <h2>Log in or register</h2>
                            </span>
                        </Button>
                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
}
export default Header