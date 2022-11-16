import React from "react";
import style from "./index.module.css";

const index = () => {
  return (
    <div className={`${style.firstBanner}`}>
      <div className={`${style.wrapper}`}>
        <div className={`w-50 ${style.imgContainer}`}>
          <img
            src="https://www.dropbox.com/s/kmd03ssfm3jx6sz/wp4313180-maps-google-wallpapers.jpg?raw=1"
            alt=""
          />
        </div>
        <div className={`w-50 ${style.fb_rightChild}`}>
          <h2>State of NJ</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <div className={`${style.timeSection}`}>
            <div>
              <h3 className="text-primary">2 Years</h3>
              <p>lorem ipsum dolor</p>
            </div>
            <div>
              <h2 className="text-primary">Once a Year</h2>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className={`${style.btnContainer}`}>
            <button className={`${style.btn_1}`}>button_1</button>
            <button className={`${style.btn_2}`}>button_2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
