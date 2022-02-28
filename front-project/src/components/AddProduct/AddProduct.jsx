import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import './AddProduct.scss'
const AddProduct = () => {
  const [value1, setValue1] = useState(2500);
  const [value2, setValue2] = useState(2500);

  return (
    <div className="addProduct">
      <InputNumber
        inputId="stacked"
        value={value1}
        onValueChange={(e) => setValue1(e.value)}
        showButtons
        mode="currency"
        currency="EUR"
      />
      <InputText
        id="titulo"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        placeholder='titulo'
      />
    </div>
  );
};

export default AddProduct;
