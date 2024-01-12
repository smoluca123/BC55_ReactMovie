import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Input,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { getListMoviesPageAPI } from '../../../../apis/movieAPI';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ListMovie from './ListMovie';
import { PlusIcon } from '@heroicons/react/24/solid';
import DialogAddMovie from './DialogAddMovie';
import DatePicker from '../UI/DatePicker';
import { Toaster } from 'react-hot-toast';

const TABLE_HEAD = [
  'Tên phim',
  'Mô tả',
  'Ngày chiếu',
  'Đánh giá',
  'Hình ảnh',
  'Action',
];

export default function MovieManagement() {
  const [searchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState([]);
  // const pageParam =
  //   searchParams.get('page') >= 1 && searchParams.get('page') <= totalPages
  //     ? searchParams.get('page')
  //     : 1;
  const pageParam = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState(pageParam || 1);
  const [isLoading, setIsLoading] = useState(false);
  const limitOnPage = 10;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const navigate = useNavigate();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(+currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const content = await getListMoviesPageAPI(currentPage, limitOnPage);
      setMovies(content.items);
      setTotalPages(content.totalPages);
      if (currentPage > content.totalPages) setCurrentPage(content.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    navigate(`?page=${currentPage}`);
    fetchMovies();
  }, [currentPage, limitOnPage]);
  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Recent Transactions
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Movie
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <ListMovie fetchMovies={fetchMovies} movies={movies} />
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={handlePrevPage}
              disabled={isLoading || currentPage == 1}
            >
              Previous
            </Button>
            <input
              type="number"
              className="w-16 border border-black rounded-md flex text-center justify-center items-center"
              value={currentPage || 1}
              onChange={(e) => {
                if (e.target.value < 1) {
                  e.target.value = 1;
                }
                e.target.value > totalPages
                  ? setCurrentPage(totalPages)
                  : setCurrentPage(+e.target.value);
              }}
            />
            <Button
              variant="outlined"
              size="sm"
              onClick={handleNextPage}
              disabled={isLoading || currentPage == totalPages}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      <DatePicker />
      <DialogAddMovie
        open={open}
        onOpen={handleOpen}
        fetchMovies={fetchMovies}
      />
      <Toaster position="top-right" />
    </>
  );
}
