import React from 'react';

function Footer() {
  return (
    <div className='py-5 text-center w-full col-span-3'>
      {/*Social Icons */}
      <p className='text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} DeadDriftFlycastersLLC. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;