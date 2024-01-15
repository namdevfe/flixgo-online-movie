import Button from "@/components/Button";
import ComponentLoading from "@/components/ComponentLoading";
import Input from "@/components/Input";
import PATHS from "@/constants/path";
import { MESSAGE, REGEX } from "@/constants/validate";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle submit
  const _onSubmit = (data) => {
    if (data) {
      setLoading(true);
      // Call API
      setTimeout(() => {
        console.log("🚀data---->", data);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="sign section--bg" data-bg="/img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              <form
                className="sign__form"
                onSubmit={handleSubmit(_onSubmit)}
                style={{ position: "relative" }}
              >
                {loading && <ComponentLoading />}
                <Link to={PATHS.HOME} className="sign__logo">
                  <img src="/img/logo.svg" alt="flixgo-logo" />
                </Link>
                <Input
                  placeholder="Name"
                  {...register("name", {
                    required: MESSAGE.required,
                  })}
                  error={errors?.name?.message}
                />
                <Input
                  placeholder="Email"
                  {...register("email", {
                    required: MESSAGE.required,
                    pattern: {
                      value: REGEX.email,
                      message: MESSAGE.email,
                    },
                  })}
                  error={errors?.email?.message}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: MESSAGE.required,
                    minLength: {
                      value: 6,
                      message: MESSAGE.password,
                    },
                  })}
                  error={errors?.password?.message}
                />
                <div className="sign__group sign__group--checkbox">
                  <input
                    id="isAgree"
                    type="checkbox"
                    // defaultChecked="checked"
                    {...register("isAgree", {
                      required: MESSAGE.required,
                    })}
                    error={errors?.isAgree?.message}
                  />
                  <label htmlFor="isAgree">
                    I agree to the <Link to={PATHS.FAQ}>Privacy Policy</Link>
                  </label>
                  <span
                    style={{
                      display: "block",
                      color: "red",
                      minHeight: 24,
                      fontSize: 14,
                    }}
                  >
                    {errors?.isAgree?.message || ""}
                  </span>
                </div>
                <Button type="submit">Sign up</Button>
                <span className="sign__text">
                  Already have an account?{" "}
                  <Link to={PATHS.LOGIN}>Sign in!</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
