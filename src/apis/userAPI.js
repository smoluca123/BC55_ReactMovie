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

export { signupAPI, signinAPI, getInfoUserAPI };
