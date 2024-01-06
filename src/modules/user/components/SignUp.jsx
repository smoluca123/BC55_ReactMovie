import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from '@material-tailwind/react';
import { Link, useNavigate, Navigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import cn from 'classnames';

import { signupAPI } from '../../../apis/userAPI';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import usePreloader from '../../../hooks/usePreloader';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../slices/authSlice';

const validationSchema = object({
  hoTen: string().required('Họ tên không được để trống'),
  email: string()
    .required('Email không được để trống')
    .email('Email không đúng định dạng'),
  taiKhoan: string()
    .required('Tài khoản không được trống')
    .min(4, 'Tài khoản có ít nhất 4 ký tự'),
  matKhau: string().matches(/^(?=.*[A-Z]).{6,}$/, 'Mật khẩu '),
  soDt: string().required('Số điện thoại không được trống'),
});
export default function SignUp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { preLoader } = usePreloader();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      hoTen: '',
      matKhau: '',
      email: '',
      soDt: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const getCnValidation = (_error) =>
    cn('!border-t-blue-gray-200 focus:!border-t-gray-900', {
      '!border-t-red-500 focus:!border-t-red-500 focus:!border-red-500': _error,
      '!border-t-green-500 focus:!border-t-green-500 focus:!border-green-500':
        !_error,
    });
  const getSpanError = (error) =>
    error && <span className="text-red-600">{error.message}</span>;
  const getColorError = (error) => (error ? 'red' : 'blue-gray');

  const handleSignup = async (values) => {
    try {
      setLoading(true);
      setError(null);

      const content = await signupAPI(values);
      await dispatch(
        signin({ taiKhoan: content.taiKhoan, matKhau: content.matKhau })
      ).unwrap();
      setSuccess(true);
      setTimeout(() => {
        const url = searchParams.get('from') || '/user/login';
        navigate(url);
      }, 1500);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleError = (errors) => {
    console.log(errors);
  };

  useEffect(() => {
    preLoader(500);
  }, []);

  if (currentUser) {
    const url = searchParams.get('from') || '/';
    return <Navigate to={url} replace />;
  }

  return (
    <Card className="p-8" color="white" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(handleSignup, handleError)}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color={getColorError(errors.hoTen)}
            className="-mb-3"
          >
            Họ tên
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className={getCnValidation(errors.hoTen)}
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            {...register('hoTen')}
            error={!!errors.hoTen}
            success={!errors.hoTen && watch('hoTen') !== ''}
          />
          {getSpanError(errors.hoTen)}

          <Typography
            variant="h6"
            color={getColorError(errors.taiKhoan)}
            className="-mb-3"
          >
            Tài khoản
          </Typography>

          <Input
            size="lg"
            placeholder="name@mail.com"
            className={getCnValidation(errors.taiKhoan)}
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            {...register('taiKhoan')}
            error={!!errors.taiKhoan}
            success={!errors.taiKhoan && watch('taiKhoan') !== ''}
          />
          {getSpanError(errors.taiKhoan)}
          <Typography
            variant="h6"
            color={getColorError(errors.email)}
            className="-mb-3"
          >
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className={getCnValidation(errors.email)}
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            {...register('email')}
            error={!!errors.email}
            success={!errors.email && watch('email') !== ''}
          />
          {getSpanError(errors.email)}

          <Typography
            variant="h6"
            color={getColorError(errors.matKhau)}
            className="-mb-3"
          >
            Mật Khẩu
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className={getCnValidation(errors.matKhau)}
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            {...register('matKhau')}
            error={!!errors.matKhau}
            success={!errors.matKhau && watch('matKhau') !== ''}
          />
          {getSpanError(errors.matKhau)}
          <Typography
            variant="h6"
            color={getColorError(errors.matKhau)}
            className="-mb-3"
          >
            Số điện thoại
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="0909090909"
            className={getCnValidation(errors.soDt)}
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            {...register('soDt')}
            error={!!errors.soDt}
            success={!errors.soDt && watch('soDt') !== ''}
          />
          {getSpanError(errors.soDt)}
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        <Button
          className="mt-6 mb-2"
          fullWidth
          type="submit"
          disabled={loading || Object.keys(errors).length !== 0}
        >
          sign up
        </Button>

        {error && (
          <Alert color="red" className="flex justify-center">
            <div className="-mr-12">{error}</div>
          </Alert>
        )}
        {success && (
          <Alert
            color="green"
            className="flex justify-center"
            icon={<FontAwesomeIcon icon="fa-solid fa-circle-check" />}
          >
            <div className="-mr-12">Đăng ký thành công!</div>
          </Alert>
        )}
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{' '}
          <Link to="/user/login" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
