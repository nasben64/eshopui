import React, { useState } from "react";
import "./Slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1564463836257-f028d0ff4446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/502751538/photo/couple-looking-each-other.jpg?s=612x612&w=0&k=20&c=9pI9t7lKIuJDxH0fSiZKQafY6Kl9iGa3hFR9W16HB-o=",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <img src={d} alt="" key={d} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
