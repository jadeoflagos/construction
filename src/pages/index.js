export default function Home() {
  return (
    <div className=" pt-7 md:pt-[58px] px-5 md:px-[141px] pb-[70px] md:pb-[151px]">
      <div className="flex justify-end pr-[74px] md:justify-center mb-9 cursor-pointer">
        <img src="image/darkmode.png" alt="" />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div>
          <h3 className="text-[#242526]  font-bold text-[34px] md:text-[40px] mb-8">
            We are currently working <br />
            on improving our website
          </h3>
          <p className="font-normal text-[15px] md:text-base text-[#3A3B40]  mb-[54px]">
            We are excited to show you what we are done with this space. <br />
            Thank you for your enthusiasm and patience as we work behind <br />{" "}
            the scenes to complete everything as quickly as possible. <br />
            Check back soon; it will not be long :)
          </p>
          <div className="flex bg-[#77459B] py-5 px-8 text-[#F6F6F6] text-base font-semibold text-center gap-7 items-center w-[255px] rounded cursor-pointer  ">
            <a href="#">
              {" "}
              <button>Get Direct Access</button>
            </a>{" "}
            <img src="image/Mask.svg" alt="" />
          </div>
        </div>
        <div className="imago">
          <img src="image/construct.png" alt="" />
        </div>
      </div>
    </div>
  );
}
