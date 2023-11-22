import React from "react";
import { product } from "../product";
function Image() {
  return <img src={product.image_url} width={286} alt="img" />;
}

export default Image;
