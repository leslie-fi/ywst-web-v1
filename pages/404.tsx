import React from 'react'
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <>
      <div className='container mx-auto px-5'>
        <div className='bg-gray-50 bg-opacity-50'>
          <div className='min-h-screen'>
            <div className='relative overflow-hidden'>
              <div className='relative pt-6 md:pb-2 sm:pb-2 lg:pb-3 xl:pb-6'>
                <div className='max-w-screen-2xl mx-auto '>
                  <h2 className='text-lg font-semibold tracking-tight md:tracking-tighter leading-tight mb-2 mt-8'>
                    <div className='max-w-screen-xl mx-auto'>
                      <nav className='relative flex items-center sm:h-10'>
                        <div className='flex items-center flex-1 '>
                          <div className='mx-auto font-black font-heading text-4xl text-green-900'>
                            <Link href='/' aria-label='Home'>
                              YWST
                            </Link>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage