import NavItem from './NavItem';
import ToggleDarkMode from './ToggleDarkMode';
import navbarData from '@/data/navbarData';
import clsxm from '@/lib/clsxm';
import ButtonWithIcon from '@/components/button/ButtonWithIcon';
import ToggleLanguage from './ToggleLanguage';
import { useContext } from 'react';
import ContactContext from '@/context/ContactContext';

export default function Navbar() {
  const { github, linkedIn } = useContext(ContactContext);

  return (
    <nav>
      <div className={clsxm('flex items-center justify-between py-6')}>
        <ul className='ml-[-0.75rem] flex items-center justify-center '>
          {navbarData.map(({ name, href }) => (
            <NavItem key={name} href={href} name={name} />
          ))}
        </ul>
        <div className='flex space-x-2'>
          {github && <ButtonWithIcon path={github} icon='fa:github' />}
          {linkedIn && (
            <ButtonWithIcon path={linkedIn} icon='fa-brands:linkedin-in' />
          )}
          <ToggleLanguage />
          <ToggleDarkMode />
        </div>
      </div>
      <hr className='mb-4 w-full border-slate-300 dark:border-slate-800' />
    </nav>
  );
}
