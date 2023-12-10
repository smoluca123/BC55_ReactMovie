import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
export default function Login() {
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
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
