import baseAPI from './baseAPI';

const getBannerMoviesAPI = async () => {
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

const getListMoviesPageAPI = async (page = 1, limitOnPage = 10) => {
  try {
    const { data } = await baseAPI.get('/QuanLyPhim/LayDanhSachPhimPhanTrang', {
      params: {
        soTrang: page,
        soPhanTuTrenTrang: limitOnPage,
      },
    });
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const getDetailMovieAPI = async (id) => {
  try {
    const { data } = await baseAPI.get('/QuanLyPhim/LayThongTinPhim', {
      params: {
        MaPhim: id,
      },
    });
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

export {
  getBannerMoviesAPI,
  getListMoviesAPI,
  getDetailMovieAPI,
  getListMoviesPageAPI,
};
