"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button, NavbarItem } from "@nextui-org/react";
import { useReducer } from "react";

const NavBar = () => {
  const router = useRouter();
  const menuItems = [
    { label: "Immigrants", href: "/product/immigrants" },
    { label: "Business", href: "/product/business" },
    // { label: "Blog", href: "/blog" },
    { label: "Investors", href: "/investors" },
    { label: "Sign up", href: "/signup" },
    { label: "Sign In", href: "/signin" },
    { label: "Contact us", href: "/contactUs" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);


  return (

    <Navbar 
      shouldHideOnScroll className="max-w-[100%]" 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>

      <NavbarBrand>
        <Link 
          href={"/"} 
          className=" text-[32px] font-inter font-bold" 
          onClick={() => 
            isMenuOpen && setIsMenuOpen()
            }

        >
          ImmiCAN
        </Link>
      </NavbarBrand>

      <NavbarMenuToggle
        aria-label="Open menu"
        className="sm:hidden"
      />

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href={'/'} className=" font-semiboldtext-3xl pb-0.5 relative after:bg-btnBlue after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className="rounded-md shadow-0  " showArrow >
            <DropdownTrigger className=" font-semiboldtext-3xl relative after:bg-btnBlue after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">How it works</DropdownTrigger>
            <DropdownMenu aria-label="Link Actions"  >
              <DropdownItem onClick={() => router.push(menuItems[0].href)} className="rounded-md" key="Immigrants" >Immigrants</DropdownItem>
              <DropdownItem onClick={() => router.push(menuItems[1].href)} className="rounded-md" key="business">Business</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* Navbar route to Blog */}
        {/* <NavbarItem>
          <Link href={'/blog'} className=" font-semiboldtext-3xl relative after:bg-btnBlue after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Blog</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link href={menuItems[2].href} className=" font-semiboldtext-3xl pb-0.5 relative after:bg-btnBlue after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Investors</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={menuItems[5].href} className=" font-semiboldtext-3xl pb-0.5 relative after:bg-btnBlue after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Contact Us</Link>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={() => router.push(menuItems[3].href)} className=" p-6  bg-btnBlue  text-white font-bold "> Sign up</Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={() => router.push(menuItems[4].href)} className=" p-6 bg-black   text-white font-bold" > Sign in</Button>
        </NavbarItem>
        


        <NavbarMenu className="text-right font-semiboldtext-3xl">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href={item.href}
                onClick={() => setIsMenuOpen()}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </NavbarContent>
    </Navbar>

  );
};

export default NavBar;
