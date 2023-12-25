import baseAPI from './baseAPI';

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

export { getCinemasAPI, getShowTimesAPI };
