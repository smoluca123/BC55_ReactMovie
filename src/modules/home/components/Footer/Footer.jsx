import React from 'react';

export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="bg-black mt-[90px]">
        <div className="left__item">
          <h6>TIX</h6>
          <div className="mt-2">
            <div className="item">
              <a href="">FAQ</a>
            </div>
            <div className="item">
              <a href="">Thỏa thuận sử dụng</a>
            </div>
            <div className="item">
              <a href="">Brand Guidelines</a>
            </div>
            <div className="item">
              <a href="">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
        <div className="center__item grid grid-rows-4 grid-flow-col gap-4">
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="
        "
          >
            <a href="https://www.cgv.vn/">
              <img
                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="right__item">
          <div className="app__user">
            <h6>APP MOBILE</h6>
            <div className="container">
              <div className="">
                <a href="">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABaCAMAAADHGlvmAAAAgVBMVEUAAACVlZWnp6eWlpaVlZWhoaGVlZWWlpaXl5ebm5uUlJSVlZWenp6VlZWVlZWVlZWWlpaXl5eZmZmVlZWUlJSVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWXl5eVlZWVlZWVlZWWlpaVlZWUlJSVlZWUlJSWlpaWlpaVlZWYmJiUlJT4ZcJDAAAAKnRSTlMA+AVP8guOKx0Q7qkT472zZTIX586hiYFfx6WcRifc1nk9697Rl2pVciP1WFzxAAACV0lEQVRYw62Y6ZKqMBCFEzbZkUVARBgdt+n3f8BbtxxtenApOXx/U36VmNOdBPU5Ruusc99TOK7j038WsCk8arqSoqqzTze2mMk4EhNCKjsmxsdmNVRRDLlWNOQLUS3Zg0bCtYRqrQAaEtSAKpWqzphvWiZSOlqokvk2Mc8QVzBU6Z1CiIYqE6tEYqxWQfyw6oD2wMV9fZUB9+Xf5Tnu59NYOkGSrL5a+9Zu1lEfO6ZxHVwVvtb7PnHO77LRNlzFOl56spTKTpb4SYwLjGVEEt3c0+SdChphlU9sbUcP6KpUKdtsND1kXz9K0ZGeoXN6QWCPNutAUykyqVpENJ0+FNHeE8J6sEyvJ4wNuxIC4TtBjZr05abKfFD1zbeeI6g6ZJwsDaoGiXAwVe6yythjrp1iTExVyssQQm7LAwvhNFRtIZUlpnWG65CpIJcpXAHkCoVrjagiJeigHihdFuJKpAsq7GBGVzyjq5AuH4q9dH0TgitcBeSqhSshdCPn6tBaFNEFcsmHZIu5xIeKkDA2eI9mTLiBMdZCPMIwoh/48GDyFK4iRi85rTjJ7zp3NAN643EqYK4Py3IWl8vvQ5ReXYmJQYvcxFU6+3UZeMRWcB0xXJTwxBLF1KArne84aliEFpLlKsEGzhbj5ZNVB4M1YGB1qkYc4RUydg/fwZiFNUHliz3EEms+8EzsipV6SjC5PYwxPpMFhnolG+W/KM2tZ3vbs9ON36FvOFnE+OVWMelKE5Of1Vuy+y/i+u8awsutoewr+5WEbbXTbCozfDxoXqrqtBv/U/8AtXW2fqhv80sAAAAASUVORK5CYII="
                    alt=""
                  />
                </a>
              </div>
              <a href="">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABXCAMAAAB7hEg4AAAAe1BMVEUAAACVlZWXl5eWlpaUlJSUlJSUlJSWlpaVlZWVlZWVlZWWlpaUlJSjo6OVlZWVlZWfn5+WlpaVlZWXl5eVlZWVlZWVlZWUlJSXl5eenp6VlZWtra2VlZWVlZWVlZWVlZWZmZmbm5uVlZWVlZWVlZWVlZWWlpaVlZWUlJTu8U1AAAAAKHRSTlMA51MY6UO6WiTD+JatBYDcDDvJNfHToJEuE4gI4ox4ayAQtqZ9ckhgkElVywAAAgxJREFUWMPt2NmSojAYhuHfaVAIKqtsCojrd/9XOB0DZtol8ls9B13NcySWvpVoQmnoR1m0ZNAuOK1UOPRUjJLTCuE+H/NKOMSRoaEnDjgQS7BJtvRQLlYL4jlhp6Lx7FB6XlnP4uAywwgxcaU4U1hF0ERU5nRERWyFlfi4sxL+mp1a1wkeshr2x7XBU6uQtexLmIiasSCmeGE+dJ5thJd262ETdDHAfFDLw0VS1o/WxLES6tFyQOoPlFAuMdzw1/oF9oCN2C0jeTHHDU9+BlBeb8slOtvPd91N0pWbG53m1XK/Tiuy4z3uePnJv06YzM5gOJlbUzDszVMUYLCMrRgsgak1A8uHqXUEi2Nq1d/YOk9YtvRfbSs3SkN6k52587rt7wwCUiYf8r9HD9JEDcURUBp+S3/zVqF+H/SXC35Lb5Tq600q57f0RnG/bmeb39IbZfKNLWtsja2xNbbG1u9p7dAL+S0bvZX6m94RLb9VoJfKlq2v+C3a60lJaTfI9p1W4UO6njM0n9dJFrz3OyfINhDRia4K+exbLalY0D1+q/OTWuz/HSY+GFwyCgUGS3Iyi10MtHPopcCRIvQy52KP3tSRAhqsG54+PPBujybG1tgaWyY79I7qiRK9lNtaohfe3nIbbusjgRKpa32wZgW8kj4d2Gypk1uQkpD48r0l/Kr4Z6jZRkxSw1nJX+vMF/qKdZ1sAAAAAElFTkSuQmCC"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="social__media">
            <h6>SOCIAL</h6>
            <div className="container">
              <div className="">
                <a href="">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="">
                <a href="">
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-App-Rec.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="">
          <h6>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
          <h6>
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
          </h6>
          <h6>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</h6>
          <h6>
            đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
            hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
          </h6>
          <h6>Số Điện Thoại (Hotline): 1900 545 436</h6>
        </div>
        <div className="">
          <img
            src="https://demo1.cybersoft.edu.vn/static/media/daThongBao-logo.cb85045e.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
