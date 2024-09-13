import Navigation from './Navigation';

export type NavItemsType = {
  label: string;
  href: string;
};

const navItems: NavItemsType[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Posts',
    href: '/posts',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export function NavLinks() {
  return (
    <nav className="flex justify-around [&_*]:rounded-full p-5 [&_*]:px-4 ">
      <Navigation navItems={navItems} />
    </nav>
  );
}
