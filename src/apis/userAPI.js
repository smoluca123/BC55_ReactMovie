import baseAPI from './baseAPI';

const signupAPI = async (credentials) => {
  try {
    const { data } = await baseAPI.post('/QuanLyNguoiDung/DangKy', credentials);
    return data.content;
  } catch (error) {
    if (error.response) throw error.response.data?.content;
    throw error.message;
  }
};
const signinAPI = async (credentials) => {
  try {
    const { data } = await baseAPI.post(
      '/QuanLyNguoiDung/DangNhap',
      credentials
    );
    return data.content;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
  }
};

const getInfoUserAPI = async () => {
  try {
    const { data } = await baseAPI.post('/QuanLyNguoiDung/ThongTinTaiKhoan');
    return data.content;
  } catch (error) {
    if (error.response) throw error.response.data?.content;
    throw error.message;
  }
};

const getListUserAPI = async () => {
  try {
    const { data } = await baseAPI.get(
      '/QuanLyNguoiDung/LayDanhSachNguoiDung',
      {
        params: {
          MaNhom: 'GP00',
        },
      }
    );
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};
const getListUserPagesAPI = async (page = 1, limitOnPage = 10) => {
  try {
    const { data } = await baseAPI.get(
      '/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang',
      {
        params: {
          soTrang: page,
          soPhanTuTrenTrang: limitOnPage,
          MaNhom: 'GP00',
        },
      }
    );
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};
const getUserByUserNameAPI = async (userName) => {
  try {
    const { data } = await baseAPI.get('/QuanLyNguoiDung/TimKiemNguoiDung', {
      params: {
        MaNhom: 'GP00',
        tuKhoa: userName,
      },
    });
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};

const updateUserAPI = async (credentials) => {
  try {
    const { data } = await baseAPI.post(
      '/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      credentials
    );
    return data.content;
  } catch (error) {
    if (error.response) throw error.response.data?.content;
    throw error.message;
  }
};

const addUserAPI = async (credentials) => {
  try {
    const { data } = await baseAPI.post(
      '/QuanLyNguoiDung/ThemNguoiDung',
      credentials
    );
    return data.content;
  } catch (error) {
    if (error.response) throw error.response.data?.content;
    throw error.message;
  }
};

const deleteUserAPI = async (userName) => {
  try {
    const { data } = await baseAPI.delete(`/QuanLyNguoiDung/XoaNguoiDung/`, {
      params: {
        TaiKhoan: userName,
        maNhom: 'GP00',
      },
    });
    return data.content;
  } catch (error) {
    if (error.response) throw error.response.data?.content;
    throw error.message;
  }
};

const getTypeUserAPI = async () => {
  try {
    const { data } = await baseAPI.get(
      '/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung'
    );
    return data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
};
export {
  signupAPI,
  signinAPI,
  getInfoUserAPI,
  getListUserAPI,
  getListUserPagesAPI,
  getUserByUserNameAPI,
  updateUserAPI,
  addUserAPI,
  deleteUserAPI,
  getTypeUserAPI,
};
