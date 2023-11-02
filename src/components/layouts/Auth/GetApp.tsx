import React from 'react';
import { Link } from 'react-router-dom';

import ggPlay from '../../../assets/images/ggPlay.png';
import microsoft from '../../../assets/images/microsoft.png';

const GetApp: React.FC = () => {
  return (
    <div className='center login_wrapper_lower'>
      <p className='mx-5'>Get the app.</p>
      <div className='center'>
        <Link
          target='_blank'
          className='mr-2'
          to='https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=ig_mid%3D3E681247-F7FD-466F-AA8C-AB5621787619%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge'
        >
          <img src={ggPlay} alt='Google Play' />
        </Link>
        <a href='ms-windows-store://pdp/?productid=9nblggh5l9xt&amp;referrer=appbadge&amp;source=www.instagram.com&amp;mode=mini&amp;pos=0%2C0%2C1920%2C1032&amp;next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1'>
          <img src={microsoft} alt='Microsoft' />
        </a>
      </div>
    </div>
  );
};

export default GetApp;
