import React from "react";
import { Carousel} from "antd";
const CarouselStyle = {
  margin: 0,
  height: "320px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};
function class1(){
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
    return(
        <div>
            <Carousel afterChange={onChange}>
              <div>
                <h3 style={CarouselStyle}>你</h3>
              </div>
              <div>
                <h3 style={CarouselStyle}>好</h3>
              </div>
              <div>
                <h3 style={CarouselStyle}>啊</h3>
              </div>
              <div>
                <h3 style={CarouselStyle}>!</h3>
              </div>
            </Carousel>
        </div>
    )
}
export default class1;