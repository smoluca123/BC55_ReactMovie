import baseAPI from './baseAPI';

const getListTicketAPI = async (maLichChieu) => {
  try {
    const { data } = await baseAPI.get('/QuanLyDatVe/LayDanhSachPhongVe', {
      params: {
        MaLichChieu: maLichChieu,
      },
    });
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const buyTicketAPI = async (maLichChieu, danhSachVe) => {
  try {
    const { data } = await baseAPI.post('/QuanLyDatVe/DatVe', {
      maLichChieu,
      danhSachVe,
    });
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

export { getListTicketAPI, buyTicketAPI };
