import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import HeaderAuth from './header-auth';


export default function Header() {

  return (
    <Navbar className="shadow md-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Input placeholder='Search' />
        </NavbarItem>
      </NavbarContent>
   
      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}