import baseAPI from './baseAPI';

const getMovieDetailsAPI = async (movieId) => {
  try {
    const resp = await baseAPI.get('quanlyrap/laythongtinlichchieuphim', {
      params: {
        maPhim: movieId,
      },
    });
    return resp.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const getCinemasAPI = async () => {
  try {
    const { data } = await baseAPI.get('/QuanLyRap/LayThongTinHeThongRap');
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const getShowTimesAPI = async () => {
  try {
    const { data } = await baseAPI.get(
      '/QuanLyRap/LayThongTinLichChieuHeThongRap'
    );
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const getShowTimesMovieAPI = async (movieId) => {
  try {
    const { data } = await baseAPI.get('/QuanLyRap/LayThongTinLichChieuPhim/', {
      params: {
        MaPhim: movieId,
      },
    });
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const createShowtimeAPI = async (showtime) => {
  try {
    const { data } = await baseAPI.post('/QuanLyDatVe/TaoLichChieu', showtime);
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

// bí tiếng anh quá :))
const getCumRapTheoHeThongRapAPI = async (maHeThongRap) => {
  try {
    const { data } = await baseAPI.get(
      '/QuanLyRap/LayThongTinCumRapTheoHeThong',
      {
        params: {
          maHeThongRap,
        },
      }
    );
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};
export {
  getCinemasAPI,
  getShowTimesAPI,
  getMovieDetailsAPI,
  getShowTimesMovieAPI,
  createShowtimeAPI,
  getCumRapTheoHeThongRapAPI,
};
