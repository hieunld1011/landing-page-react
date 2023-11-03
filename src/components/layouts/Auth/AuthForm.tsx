import bcrypt from 'bcryptjs';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../common/Button';
import Input from '../../common/Input';

const AuthForm: React.FC = () => {
  const regExpEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const navigate = useNavigate();
  const { password, emailOrPhone } = JSON.parse(sessionStorage.getItem('information') || '{}');

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      emailOrPhone: '',
      password: '',
    },
  });

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    try {
      const isMatch =
        emailOrPhone === data.emailOrPhone && bcrypt.compareSync(data.password, password);

      if (isMatch) {
        sessionStorage.setItem('login', 'true');
        toast.success('Login sucessful!');
        navigate('/');
      } else {
        toast.error('Authentication failed! Make sure you have registered then try again.');
      }
    } catch (error) {
      console.log('AuthForm: ' + error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col mb-3'>
      <div className='mt-6 flex flex-col'>
        <div className='login_wrapper_main'>
          <Input
            placeholder='Phone number, username, or email'
            register={register}
            id='emailOrPhone'
            required
            error={errors}
            type='text'
            pattern={new RegExp(regExpEmail)}
          />
          <Input
            type='password'
            id='password'
            error={errors}
            required
            placeholder='Password'
            minLength={6}
            register={register}
          />
          <div className='mx-10 my-2'>
            <Button type='submit' classBtn={'w-full login_btn'} padding={'py-2 px-4'}>
              Log in
            </Button>
          </div>
          <div className='mx-10 my-2'>
            <div className='center'>
              <div className='login_wrapper_main_underline'></div>
              <div className='login_wrapper_main_text mx-4'>Or</div>
              <div className='login_wrapper_main_underline'></div>
            </div>
          </div>
          <div className='mx-10 my-2 center'>
            <button type='button'>
              <span className='login_wrapper_main_fb mr-2'></span>
              <span className='login_wrapper_main_fb-text'>Log in with Facebook</span>
            </button>
          </div>
        </div>
      </div>
      <Link to='/' className='mt-3 center'>
        Forgot password?
      </Link>
    </form>
  );
};

export default AuthForm;
