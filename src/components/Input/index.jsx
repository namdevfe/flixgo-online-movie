import { forwardRef } from "react";

const InputM = (
  { className = "", error, renderInput, name, ...restProps },
  ref
) => {
  return (
    <div className={`sign__group ${className}`}>
      {renderInput?.({ ...restProps }) || (
        <input className="sign__input" name={name} ref={ref} {...restProps} />
      )}
      <span
        style={{ display: "block", color: "red", minHeight: 24, fontSize: 14 }}
      >
        {error || ""}
      </span>
    </div>
  );
};

const Input = forwardRef(InputM);

export default Input;
