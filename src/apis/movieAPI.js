import baseAPI from './baseAPI';

const getBannerMovies = async () => {
  try {
    const { data } = await baseAPI.get('/QuanLyPhim/LayDanhSachBanner');
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const getListMoviesAPI = async () => {
  try {
    const { data } = await baseAPI.get('/QuanLyPhim/LayDanhSachPhim');
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

export { getBannerMovies, getListMoviesAPI };
