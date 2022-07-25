import NavItem from './NavItem';
import ToggleDarkMode from './ToggleDarkMode';
import navbarData from '@/data/navbarData';
import clsxm from '@/lib/clsxm';

export default function Navbar() {
  return (
    <nav
      className={clsxm(
        'flex items-center justify-between p-6',
        'border-b border-gray-300 dark:border-gray-700'
      )}
    >
      <ul className='flex items-center justify-center '>
        {navbarData.map(({ name, href }) => (
          <NavItem key={name} href={href} name={name} />
        ))}
      </ul>
      <div>
        <ToggleDarkMode />
      </div>
    </nav>
  );
}
