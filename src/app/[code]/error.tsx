'use client';

import Link from 'next/link';

export default function ErrorCodePage() {
   return (
      <div className="flex flex-col w-full items-center py-20">
         <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-secondary md:text-5xl lg:text-6xl ">
            ¡Ha ocurrido un error!
         </div>
         <p className="mb-6 text-lg font-normal text-primary lg:text-xl sm:px-16 xl:px-48 ">
            Por favor, intentalo mas tarde.
         </p>
         <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 "
         >
            Inicio
         </Link>
      </div>
   );
}
