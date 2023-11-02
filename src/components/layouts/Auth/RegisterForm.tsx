import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';

import Button from '../../common/Button';
import Input from '../../common/Input';

interface RegisterFormProps {
  setVariantValue: any;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setVariantValue }) => {
  const regExpEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

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
      data.password = bcrypt.hashSync(data.password, 8);
      sessionStorage.setItem('information', JSON.stringify(data));
      setVariantValue('LOGIN');
    } catch (error) {
      console.log('RegisterForm: ' + error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col mb-3'>
      <div className='mt-6 flex flex-col'>
        <div className='login_wrapper_main'>
          <div className='mx-10 mb-2'>
            <h2 className='login_wrapper_title'>
              Sign up to see photos and videos from your friends.
            </h2>
          </div>
          <div className='mx-10 my-2 center'>
            <Button type='button' classBtn='register_wrapper_main' padding={'px-4 py-2'}>
              <span className='register_wrapper_main_fb mr-2'></span>
              <span className='register_wrapper_main_fb-text'>Log in with Facebook</span>
            </Button>
          </div>
          <div className='mx-10 my-2'>
            <div className='center'>
              <div className='login_wrapper_main_underline'></div>
              <div className='login_wrapper_main_text mx-4'>Or</div>
              <div className='login_wrapper_main_underline'></div>
            </div>
          </div>
          <Input
            placeholder='Mobile Number or Email'
            id='emailOrPhone'
            required
            error={errors}
            type='text'
            pattern={new RegExp(regExpEmail)}
            register={register}
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
          <Input
            placeholder='Full Name'
            id='fullName'
            required
            error={errors}
            type='text'
            register={register}
          />
          <Input
            placeholder='Username'
            register={register}
            id='username'
            required
            error={errors}
            type='text'
          />
          <p className='mx-10 my-2 register_main_text'>
            <span className='register_main_text_wrapper'>
              <span>
                People who use our service may have uploaded your contact information to Instagram.
                <Link
                  target='_blank'
                  className='ml-1'
                  to='https://www.facebook.com/help/instagram/261704639352628?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1'
                >
                  Learn More
                </Link>
              </span>
              <br />
              <span>
                By signing up, you argee to our
                <Link
                  target='_blank'
                  className='ml-1'
                  to='https://help.instagram.com/581066165581870/?locale=en_US&amp;next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1'
                >
                  Terms ,
                </Link>
                <Link
                  target='_blank'
                  className='mx-1'
                  to='https://www.facebook.com/privacy/policy?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1'
                >
                  Privacy Policy
                </Link>
                and
                <Link
                  target='_blank'
                  className='ml-1'
                  to='https://help.instagram.com/1896641480634370/'
                >
                  Cookies Policy .
                </Link>
              </span>
            </span>
          </p>
          <div className='mx-10 my-2'>
            <Button type='submit' classBtn={'w-full login_btn'} padding={'py-2 px-4'}>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
