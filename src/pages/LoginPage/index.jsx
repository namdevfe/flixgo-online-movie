import Button from "@/components/Button";
import ComponentLoading from "@/components/ComponentLoading";
import Input from "@/components/Input";
import PATHS from "@/constants/path";
import { MESSAGE, REGEX } from "@/constants/validate";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
              {/* authorization form */}
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
                    id="remember"
                    type="checkbox"
                    {...register("isRemember", {
                      required: MESSAGE.required,
                    })}
                  />
                  <label htmlFor="remember">Remember Me</label>
                  <span
                    style={{
                      display: "block",
                      color: "red",
                      minHeight: 24,
                      fontSize: 14,
                    }}
                  >
                    {errors?.isRemember?.message || ""}
                  </span>
                </div>
                <Button type="submit">Sign in</Button>
                <span className="sign__text">
                  Don't have an account?{" "}
                  <Link to={PATHS.REGISTER}>Sign up!</Link>
                </span>
                <span className="sign__text">
                  <a href="#">Forgot password?</a>
                </span>
              </form>
              {/* end authorization form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
