import React from 'react';

export default function Subscribe() {
  return (
    <div
      className="relative container mx-auto bg-cover rounded-[18px] after:rounded-[18px] bg-no-repeat after:opacity-70 after:bg-gradient-to-r after:from-[rgb(116,0,186)] after:to-[#0f5ae0] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 bg-black "
      style={{
        backgroundImage: `url('https://pixner.net/boleto/demo/assets/images/newslater/newslater-bg01.jpg')`,
        marginTop: '50px',
      }}
    >
      <div className="text-white text-center p-10 z-10 relative mb-4 md:mb-6 lg:mb-8">
        <h3 className="text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-medium mb-2 text-title-main ">
          SUBSCRIBE TO BOLETO
        </h3>
        <h1 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-bold ">
          TO GET EXCLUSIVE BENEFITS
        </h1>
      </div>
      <div className="relative z-10 w-full md:w-[400px] mx-auto">
        <input
          type="text"
          className="w-full bg-transparent rounded-3xl border-[1px] text-title-main border-white border-solid outline-none px-4 py-2 mb-4 md:mb-6 lg:mb-8"
          placeholder="Your Email Address"
        />
        <button className="absolute right-[2px] w-full md:w-auto bg-gradient-to-br from-[#5560ff] to-[#ff4343] px-4 py-2 rounded-3xl text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}
