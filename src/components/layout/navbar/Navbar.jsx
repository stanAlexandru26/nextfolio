import NavItem from './NavItem';
import ToggleDarkMode from './ToggleDarkMode';
import navbarData from '@/data/navbarData';
import clsxm from '@/lib/clsxm';

export default function Navbar() {
  return (
    <nav>
      <div className={clsxm('flex items-center justify-between p-6')}>
        <ul className='flex items-center justify-center '>
          {navbarData.map(({ name, href }) => (
            <NavItem key={name} href={href} name={name} />
          ))}
        </ul>
        <div>
          <ToggleDarkMode />
        </div>
      </div>
      <hr className='mb-4 w-full border-slate-300 dark:border-slate-800' />
    </nav>
  );
}
