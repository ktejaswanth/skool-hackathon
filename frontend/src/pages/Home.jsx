import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import "../comp_css/Slider.css";
import Atta from "../picture/Atta_and_dals.avif";
import Beauty from "../picture/Beauty_and_personal_care.avif";
import Cleaning from "../picture/Cleaning_essentials.avif";
import Home_essentials from "../picture/Home_essentials.avif";
import kids_fashion from "../picture/kids_fashion.avif";
import Kitchen_must_haves from "../picture/Kitchen_must_haves.avif";
import Laptops_and_Tablets from "../picture/Laptops_and_Tablets.avif";
import men_fashion from "../picture/men_fashion.avif";
import Oil_and_ghee from "../picture/Oil_and_ghee.avif";
import Smart_Televisions from "../picture/Smart_Televisions.avif";

const Home = () => {
  const veritycard = [
    Atta,
    Beauty,
    Cleaning,
    Home_essentials,
    kids_fashion,
    Kitchen_must_haves,
    Laptops_and_Tablets,
    men_fashion,
    Oil_and_ghee,
    Smart_Televisions,
  ];

  const cardTitles = [
    "Classic flavours",
    "Fruity Flavors",
    "Premium Flavors",
    "Seasonal flavours",
    "Cones and Bars",
    "Desserts",
    "Natural flavours",
    "Kulfis",
    "Brownie Icecreams",
    "Nutella Icecreams"
  ];

  const slideImages = [
    "https://img.freepik.com/premium-psd/ice-cream-menu-promotion-banner-template_185005-367.jpg?w=1380",
    "https://t3.ftcdn.net/jpg/05/64/02/34/360_F_564023464_RaZb95D8yFPt2DnxbsYLQaQQ5BSrUImO.jpg",
    "https://img.freepik.com/free-vector/summer-sale-banner-template-with-chocolate-ice-cream-red_134830-949.jpg",
  ];

  const slideImages2 = [
    "https://i.pinimg.com/1200x/9a/fb/25/9afb2541929bca24a241993997ee60f5.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/043/288/955/small/ice-cream-on-an-empty-pastel-background-summer-background-with-ice-cream-and-copy-space-summer-time-composition-for-web-banner-cards-invitations-photo.jpg",
  ];

  const styleFixedImg = {
    width: "100%",
    height: "25vh",
    marginTop: "10px",
    marginBottom: "10px",
    objectFit: "cover",
  };

  const sliderContainerStyle = {
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden"
  };

  const categoryContainerStyle = {
    padding: "20px 0",
  };

  const categoryTitleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    margin: "10px 0 20px 10px",
    color: "#333",
    borderBottom: "2px solid #f0f0f0",
    paddingBottom: "10px",
  };

  const cardboxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "16px",
    padding: "0 10px",
  };

  const categoryCardStyle = {
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    position: "relative",
  };

  const categoryCardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  };

  const categoryImageStyle = {
    width: "100%",
    aspectRatio: "1/1",
    objectFit: "cover",
  };

  const categoryLabelStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "8px",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "14px",
  };

  useEffect(() => {
    document.title = 'Ecommerse | Home Page';
    return () => { 
      document.title = 'Ecommerse App';
    };
  }, []); 

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero Banner Slider */}
      <div style={sliderContainerStyle}>
        <Slider images={slideImages} interval={4000} />
      </div>

      {/* Fixed Image Banner */}
      <div className="ImageFixed" style={sliderContainerStyle}>
        <img
          style={styleFixedImg}
          src="https://www.nationaldaycalendar.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:eco%2Cw_768/MjA2NDU3NDc4NTgwMjgyNzA4/website-feature---national-ice-cream-month--july.png"
          alt="Daily Deals"
        />
      </div>

      {/* Payment Options Slider */}
      <div style={sliderContainerStyle}>
        <Slider images={slideImages2} interval={5000} />
      </div>

      {/* Category Cards */}
      <div style={categoryContainerStyle}>
        <h2 style={categoryTitleStyle}>Shop By Category</h2>
        <div className="cardbox" style={cardboxStyle}>
          {veritycard.map((el, index) => (
            <Link
              key={`veritycard-${index}`}
              to={`/products?category=${encodeURIComponent(cardTitles[index])}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={categoryCardStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, categoryCardHoverStyle);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={el}
                  alt={cardTitles[index]}
                  style={categoryImageStyle}
                />
                <div style={categoryLabelStyle}>{cardTitles[index]}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;