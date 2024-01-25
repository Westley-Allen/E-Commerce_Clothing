import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox__nav">
        <div className="descriptionBox__navBox">Description</div>
        <div className="descriptionBox__navBox fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox__description">
        <p>
          An e-commerce platform is a digital framework that empowers businesses
          to conduct online transactions. It serves as a virtual marketplace,
          facilitating the buying and selling of goods or services over the
          internet. These platforms often include features for managing
          inventory, processing payments, and building customizable online
          storefronts to enhance the overall shopping experience.
        </p>
        <p>
          This e-commerce platform offers a diverse range of products, from
          women's elegant floral sundresses and chic striped skirts to men's
          classic leather biker jackets and tailored checkered blazers. Kids'
          selections include dinosaur print hooded sweatshirts, superhero cape
          sets, and cute bunny ear headbands, ensuring a broad and stylish
          collection.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
