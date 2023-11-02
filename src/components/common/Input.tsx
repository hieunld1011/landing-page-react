import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FieldErrors, UseFormRegister, FieldValues } from 'react-hook-form';

interface InputProps {
  id: string;
  error: FieldErrors;
  type: string;
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  id,
  error,
  type,
  required,
  minLength,
  pattern,
  register,
  placeholder,
}) => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);

  const onChangeHandler = (e: any) => {
    if (e.target.value) {
      setIsInputFocus(true);
    } else {
      setIsInputFocus(false);
    }
  };

  useEffect(() => {
    toast.error(error[id]?.message as string);
  }, [error[id]?.message]);

  return (
    <div className='mx-10 mb-2'>
      <label>
        <span className={`${isInputFocus && 'typing'}`}>{placeholder}</span>
        <input
          id={id}
          autoComplete={id}
          type={type}
          {...register(id, {
            required: {
              value: required!,
              message: `${placeholder} input is required!`,
            },
            pattern: {
              value: pattern!,
              message: 'Please enter a valid email or phone',
            },
            minLength: {
              value: minLength!,
              message: `This field must be at least ${minLength} character`,
            },
          })}
          className='pl-2 pb-2'
          required={required}
          onChange={(e) => onChangeHandler(e)}
        />
      </label>
    </div>
  );
};

export default Input;
