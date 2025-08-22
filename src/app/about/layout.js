import Link from 'next/link';
import React from 'react';

const AboutLayout = ({children}) => {
    return (
        <div>
             <nav>
             <ul className="flex gap-6">
               <li>
                 <Link href="/mission">Mission</Link>
               </li>
               <li>
                 <Link href="/vission">Vission</Link>
               </li>
            
             </ul>
           </nav>
           
            {children}
        </div>
    );
};

export default AboutLayout