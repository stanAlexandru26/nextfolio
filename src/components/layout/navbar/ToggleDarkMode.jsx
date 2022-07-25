import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';

import clsxm from '@/lib/clsxm';

export default function ToggleDarkMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(resolvedTheme === 'dark' || theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleThemeChange}
      aria-label='Toggle Dark Mode'
      type='button'
      className={clsxm(
        'flex h-8 w-8 items-center justify-center transition-all  ',
        'rounded-lg bg-slate-300 text-gray-900 ring-slate-400 hover:ring-2 dark:bg-slate-700 dark:text-gray-100 dark:ring-slate-600'
      )}
    >
      <Icon
        icon={
          resolvedTheme === 'dark' || theme === 'dark'
            ? 'akar-icons:sun-fill'
            : 'bytesize:moon'
        }
        className='h-5 w-5'
        onClick={handleThemeChange}
      />
    </button>
  );
}
