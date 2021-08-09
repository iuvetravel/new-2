import React from "react";
import ShopMen from "./../../assets/men.jpg";
import ShopWomen from "./../../assets/women.jpg";
import ShopKids from "./../../assets/kids.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a>
            Wome<span>n</span>
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopKids})`,
          }}
        >
          <a>
            Kid<span>s</span>
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a>
            Me<span>n</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
