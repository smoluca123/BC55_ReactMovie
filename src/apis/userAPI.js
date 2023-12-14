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

export { signupAPI };
