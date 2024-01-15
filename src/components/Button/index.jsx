import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...restProps
}) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "sign__btn";
      break;
  }

  return (
    <button className={`${variantClass} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
