import React, { useState } from "react";
import { ReactReduxContextValue } from "react-redux";
import "../Scss/Admin.scss";
export interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  const [isLogin, setisLogin] = useState<Boolean>(false);
  const [username, setusername] = useState<String>("");
  const [password, setpassword] = useState<String>("");

  const _handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = username.toString().trim();
    if (user.length === 0 || !user) {
      alert("لطفا نام کاربری خود را وارد کنید !");
    }
    const pass = password.toString().trim();
    if (pass.length === 0 || !pass) {
      alert("لطفا کلمه عبور خود را وارد کنید !");
    }

    setisLogin(true);
  };

  const _handleSubmitPost = () => {
    alert("ok");
  };

  return (
    <>
      {isLogin ? (
        <>
          <div id="admin">
            <div className="log-form">
              <h2>ارسال مطلب</h2>
              <form onSubmit={_handleSubmitPost}>
                <input
                  type="text"
                  title="title"
                  placeholder="عنوان مطلب"
                  onChange={(event) => setusername(event.target.value)}
                />
                <textarea
                  title="content"
                  placeholder="توضیحات مطلب"
                  onChange={(event) => setpassword(event.target.value)}
                />

                <input type="file" name="img" id="img_content" />
                <button type="submit" className="btn">
                  ارسال
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="admin">
            <div className="log-form">
              <h2>به حساب کاربری خود وارد شوید !</h2>
              <form onSubmit={_handleSubmitForm}>
                <input
                  type="text"
                  title="username"
                  placeholder="نام کاربری"
                  onChange={(event) => setusername(event.target.value)}
                />
                <input
                  type="password"
                  title="username"
                  placeholder="کلمه عبور"
                  onChange={(event) => setpassword(event.target.value)}
                />
                <button type="submit" className="btn">
                  ورود
                </button>
                <a className="forgot" href="#">
                  کلمه عبور خود را فراموش کردید ؟{" "}
                </a>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
