import React, { useEffect, useState } from "react";
import "../Style/Secondslider.css";
import axios from "axios";

const Secondslider = () => {
  const [Secondsliderdata, setSecondsliderdata] = useState([]);
  const SecondsliderdataFun = () => {
    axios
      .get("http://localhost:3000/secondSlider")
      .then((res) => setSecondsliderdata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    SecondsliderdataFun();
  }, []);

  return (
    <div>
      <div className="trend-section">
        <div className="wearTrend">
          WEAR THE
          <div style={{ marginTop: "-19px" }} className="">
            TREND
          </div>
          <div className="TrendyTag">Our hottest collections</div>
        </div>
        <div className="trend-items-main">
          {Secondsliderdata.map((e, idx) => {
            return (
              <div className="trend-item" key={idx}>
                <img src={e.image} alt={e.title} />
                <p>{e.title}</p>
                <button>Explore</button>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div>
          <div className="line-container">
            <span className="line-text">FREE PROGRESSIVE LENSES</span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/2024/may/prog/New%20Web%20Banner.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="line-text">BOOK EYE TEST AT HOME</span>
          </div>
          <img
            src="https://static5.lenskart.com/media/uploads/hechome11.png"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="line-text">FREE ONLINE EYE TEST</span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="line-text">PREMIUM EYEWEAR</span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/oct23/home/13-10-23/As%20seen%20on%20Desk.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="line-text">AS SEEN ON MOUNI ROY</span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="line-text">AS SEEN ON SHARK TANK</span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="line-text">AS SEEN ON KARAN JOHAR</span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="line-text">TRENDING SUNGLASSES</span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
            alt=""
          />
        </div>
        <div>
          <div className="line-container2">
            <span className="line-text2">
              AQUACOLOR - GLAM UP WITH COLOR LENSES
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
            alt=""
          />
        </div>
      </div>

      <div className="container main-div-perfect-fit">
        <div className="line-container">
          <span className="line-text">FIND THE PERFECT FIT</span>
        </div>
        <div className="perfectfit-main">
          <div className="perfectfit-sub">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
              alt=""
            />
          </div>
          <div className="perfectfit-sub">
            <div className="perfectfit-second-sub">
              <img
                src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
                alt=""
              />
            </div>
            <div className="perfectfit-second-sub">
              <img
                src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="perfectfit-main-second">
          <div className="perfectfit-sub-second">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
              alt=""
            />
          </div>
          <div className="perfectfit-sub-second">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="LensesAndMore-container">
        <div className="line-container">
          <span className="line-text">CONTACT LENSES & MORE</span>
        </div>
        <div className="LensesAndMore-Main">
          <div className="LensesAndMore-Sub">
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg"
              alt=""
            />
          </div>
          <div className="LensesAndMore-Sub">
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="YourWayContainer">
        <div className="line-container">
          <span className="line-text">BUY IT YOUR WAY</span>
        </div>
        <div className="YourWay-Main">
          <div className="YourWay-Sub">
            <img
              src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/call.png"
              alt=""
            />
          </div>
          <div className="YourWay-Sub">
            <img
              src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/wts-up.png"
              alt=""
            />
          </div>
        </div>
        <div className="YourWay-Main">
          <div className="YourWay-Sub">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"
              alt=""
            />
          </div>
          <div className="YourWay-Sub">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* OUR BRANDS */}
      <div className="OurBrandSection">
        <div className="line-container">
          <span className="line-text">OUR BRANDS</span>
        </div>
        <div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
            alt=""
          />
        </div>
      </div>

      {/* EYEGLASSES slider */}
      <div className="slider-container">
        <div className="slider-header">
          <h2>EYEGLASSES</h2>
          <a href="/view-range">View Range</a>
        </div>

        <div className="slider">
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg"
              alt="Eyeglass 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13634-ful-ram-ale-metl-stlbr-c1-eyeglasaas_g_4921.jpg"
              alt="Eyeglass 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg"
              alt="Eyeglass 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
            />
          </div>
        </div>
        <div className="slider-controls">
          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
      </div>

      {/* SUNGLASSES slider */}
      <div className="slider-container">
        <div className="slider-header">
          <h2>SUNGLASSES</h2>
          <a href="/view-range">View Range</a>
        </div>
        <div className="slider">
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-gradient-black-full-rim-wayfarer-john-jacobs-jj-tints-jj-s13227-c4-sunglasses_csvfile-1708406002394-img_7007.jpg"
              alt="Eyeglass 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12808-c2-sunglasses_g_8841.jpg"
              alt="Eyeglass 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12808-c1-sunglasses_g_8864_image_pla.jpg"
              alt="Eyeglass 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
            />
          </div>
        </div>
        <div className="slider-controls">
          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
      </div>
      {/* 1 img */}
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
          alt=""
        />
      </div>

      {/* EYEGLASSES second slider */}
      <div className="slider-container">
        <div className="slider-header">
          <h2>EYEGLASSES</h2>
          <a href="/view-range">View Range</a>
        </div>

        <div className="slider">
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12947-c2-eyeglasses_vincent-chase-vc-e12947-c2-eyeglasses_G_1969_1.jpg"
              alt="Eyeglass 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-lk-e12617-c4-eyeglasses_vincent-chase-lk-e12617-c4-eyeglasses_vincent-chase-lk-e12617-c4-eyeglasses_j_5175_1.jpg"
              alt="Eyeglass 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11378-c9-eyeglasses_vincent-chase-vc-e11378-c9-eyeglasses_g_1393.jpg"
              alt="Eyeglass 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
            />
          </div>
        </div>
        <div className="slider-controls">
          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
      </div>

      {/* CONTACT LENSES 2 img */}
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
          alt=""
        />
      </div>

      {/* CONTACT LENSES SLider */}
      <div className="slider-container">
        <div className="slider-header">
          <h2>CONTACT LENSES</h2>
          <a href="/view-range">View Range</a>
        </div>

        <div className="slider">
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-10h-dailies_csvfile-1706873774153-1_02_02_2024.jpg"
              alt="Eyeglass 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-contact-lens-30-lens-box-contact-lens_g_2766_1.jpg"
              alt="Eyeglass 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-24h-toric-dailies_aqualens-24-h-daily-disposable-toric-contact-lens--30-lens-box_csvfile-1681127655690-144128.png.png"
              alt="Eyeglass 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
            />
          </div>
        </div>
        <div className="slider-controls">
          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
      </div>

      {/* COLOR CONTACT LENSES SLIDER */}
      <div className="slider-container">
        <div className="slider-header">
          <h2>CONTACT LENSES</h2>
          <a href="/view-range">View Range</a>
        </div>

        <div className="slider">
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg"
              alt="Eyeglass 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-gray-premium-zero-power-monthly_gray_kiara_01_09_2023.jpg"
              alt="Eyeglass 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-silver-gray-premium-zero-power-monthly_silver_grey_kiara_01_09_2023.jpg"
              alt="Eyeglass 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
            />
          </div>
        </div>
        <div className="slider-controls">
          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
      </div>

      {/* whatsapp img */}
      <div>
        <img
          src="https://static5.lenskart.com/media/uploads/whatsapp-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Secondslider;
