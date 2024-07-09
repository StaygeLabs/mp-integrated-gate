import { useTranslate } from 'store/locale/hooks/useTranslate';

export function Hello() {
  const t = useTranslate();
  return (
    <h1 className='text-2xl font-bold underline text-primary bg-primary'>
      {t('.log-ext__txt-header')}
    </h1>
  );
}

Hello.defaultProps = {};
