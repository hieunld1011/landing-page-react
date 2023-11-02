import './styles.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button';

import GetApp from './GetApp';
import AuthForm from './AuthForm';
import RegisterForm from './RegisterForm';

import { VARIANT } from '../../../types/auth.types';

const LoginForm: React.FC = () => {
  const [variantValue, setVariantValue] = useState<VARIANT>('LOGIN');

  const toggleVariant = () => {
    if (variantValue === 'LOGIN') {
      setVariantValue('REGISTER');
    } else {
      setVariantValue('LOGIN');
    }
  };

  return (
    <div className='center flex-col'>
      <div className='login_form mt-3'>
        <div className='login_wrapper_upper py-3 mb-3'>
          <div className='login_wrapper_upper_title'>
            <Link className='login_wrapper_upper_img mt-9 mb-4' to='/'></Link>
          </div>
          {variantValue === 'LOGIN' ? (
            <AuthForm />
          ) : (
            <RegisterForm setVariantValue={setVariantValue} />
          )}
        </div>

        <div className='login_wrapper_upper py-3 mb-3'>
          <span className='center'>
            <p className='m-3'>
              {variantValue === 'LOGIN' ? "Don't have an account?" : 'Have an account?'}
              <Button type='button' margin={'ml-1'} onClick={toggleVariant}>
                {variantValue === 'LOGIN' ? 'Sign up' : 'Log in'}
              </Button>
            </p>
          </span>
        </div>

        <GetApp />
      </div>
    </div>
  );
};

export default LoginForm;
