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

const addMovieAPI = async (movie) => {
  try {
    const formDataMovie = new FormData();
    for (const key in movie) {
      formDataMovie.append(key, movie[key]);
    }
    formDataMovie.append('MaNhom', 'GP03');
    const { data } = await baseAPI.post(
      '/QuanLyPhim/ThemPhimUploadHinh',
      formDataMovie
    );
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const updateMovieAPI = async (movie) => {
  try {
    const formDataMovie = new FormData();
    for (const key in movie) {
      formDataMovie.append(key, movie[key]);
    }
    // formDataMovie.append('MaNhom', 'GP03');
    const { data } = await baseAPI.post(
      '/QuanLyPhim/CapNhatPhimUpload',
      formDataMovie
    );
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const deleteMovieAPI = async (movieId) => {
  try {
    const { data } = await baseAPI.delete(`/QuanLyPhim/XoaPhim/`, {
      params: {
        MaPhim: movieId,
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
  addMovieAPI,
  deleteMovieAPI,
  updateMovieAPI,
};
