'use client'
import clsx from 'clsx'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Border } from '@/app/components/Border';

export function DelegateInfo({ delegates }: { 
    delegates: { names: string[], linkedinUrl: string[], year: number }
}) {
  return (
    <>
        <Border position="left" className={clsx('pl-8')}>
            <figure className="text-md">
                <div className='flex flex-col mt-6 space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <figcaption className="text-neutral-700">
                            {delegates.names[0]}
                        </figcaption>
                        {delegates?.linkedinUrl[0] ? (
                            <a href={delegates.linkedinUrl[0]}>
                                <LinkedInIcon fontSize='medium' style={{ color: '#0077B5' }}/>
                            </a>
                        ) : null}
                    </div>
                </div>
            </figure>
        </Border>
        <Border position="left" className={clsx('pl-8')}>
            <figure className="text-md">
                <div className='flex flex-col mt-6 space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <figcaption className="text-neutral-700">
                            {delegates.names[1]}
                        </figcaption>
                        {delegates?.linkedinUrl[1] ? (
                            <a href={delegates.linkedinUrl[1]}>
                                <LinkedInIcon fontSize='medium' style={{ color: '#0077B5' }}/>
                            </a>
                        ) : null}
                    </div>
                </div>
            </figure>
        </Border>
    </>
  );
};
