import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import cn from 'classnames';

const validationSchema = object({
  taiKhoan: string().required('Tài khoản không được trống'),
  matKhau: string().required('Mật khẩu không được trống'),
});
export default function Login() {
  const getCnValidation = (_error) =>
    cn('!border-t-blue-gray-200 focus:!border-t-gray-900', {
      '!border-t-red-500 focus:!border-t-red-500 focus:!border-red-500': _error,
      '!border-t-green-500 focus:!border-t-green-500 focus:!border-green-500':
        !_error,
    });
  const getSpanError = (error) =>
    error && <span className="text-red-600">{error.message}</span>;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  return (
    <Card className="p-8" color="white" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Đăng nhập
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome Back!
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
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
          {errors.taiKhoan && getSpanError(errors.taiKhoan)}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
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
          {errors.matKhau && getSpanError(errors.matKhau)}
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Ghi nhớ tài khoản
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        <Button
          className="mt-6 hover:text-title-main transition-all duration-300"
          fullWidth
          disabled={Object.keys(errors).length !== 0}
        >
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Bạn chưa có tài khoản?{' '}
          <Link to={'/user/signup'} className="font-medium text-gray-900">
            Đăng ký
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
