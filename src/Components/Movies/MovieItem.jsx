import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
export default function MovieItem({ movie }) {
  const { title, poster_path, overview } = movie;
  return (
    <div>
      <Card className="group mt-6 w-full shadow-[0px_-2px_20px_0] shadow-blue-500/50 hover:shadow-title-main transition-shadow duration-300 overflow-hidden">
        <CardHeader
          color="blue-gray"
          className="relative mt-0 mx-0 rounded-br-none rounded-bl-none min-h-[400px] max-h-[500px]"
        >
          <img
            className="w-full h-full object-cover"
            src={
              'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + poster_path
            }
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="flex flex-col items-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 min-h-[60px] flex items-center justify-center"
          >
            {title}
          </Typography>
          <Typography className="truncate whitespace-pre-line overflow-hidden !line-clamp-4 max-w-[300px]">
            {overview}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="mr-2 transition duration-300 group-hover:text-title-main hover:!text-rose-500">
            Xem Thêm
          </Button>
          <Button className="transition duration-300 group-hover:text-title-main hover:!text-rose-500">
            Đặt Vé
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
