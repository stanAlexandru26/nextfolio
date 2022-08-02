import contactData from '@/data/contactData';
import NavItem from './NavItem';
import ToggleDarkMode from './ToggleDarkMode';
import navbarData from '@/data/navbarData';
import clsxm from '@/lib/clsxm';
import ButtonWithIcon from '@/components/button/ButtonWithIcon';
import ToggleLanguage from './ToggleLanguage';
import ToggleMiniNav from './ToggleMiniNav';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-30 bg-slate-200 dark:bg-slate-900'>
      <div className={clsxm('flex items-center justify-between py-6')}>
        <ul className='ml-[-0.75rem] hidden items-center justify-center sm:flex'>
          {navbarData.map(({ name, href }) => (
            <NavItem key={name} href={href} name={name} />
          ))}
        </ul>
        <div className='inline-block sm:hidden'>
          <ToggleMiniNav />
        </div>
        <div className='flex space-x-2'>
          {contactData
            .filter((contact) => contact.inNavbar)
            .map(({ title, icon, href }) => (
              <ButtonWithIcon key={title} href={href} icon={icon} />
            ))}

          <ToggleLanguage />
          <ToggleDarkMode />
        </div>
      </div>
      <hr className='mb-4 w-full border-slate-300 dark:border-slate-800' />
    </nav>
  );
}
