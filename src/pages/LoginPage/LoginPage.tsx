import { Link, useNavigate } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";
import "./LoginPage.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/slices/UserSlice";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Введите E-Mail"),
  userpassword: yup
    .string()
    .min(8, "Не менее 8 символов")
    .required("Введите пароль"),
});

const mockUser = {
  mail: "nataliya@gmail.com",
  phone_number: "12345678",
  user_id: 1,
  name: "Nataliya",
  reg_data: new Date().toISOString(),
  city: "Tashkent",
};

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const onLoginFormSubmit: SubmitHandler<ILoginForm> = (data) => {
    if (data.useremail === mockUser.mail && data.userpassword === "12345678") {
      dispatch(changeUser(mockUser));
      localStorage.setItem('user', JSON.stringify(mockUser));
      navigate("/main");
    } else {
      alert("Неверные данные");
    }
  };

  return (
    <SCLoginPage>
      <div>
        <AppHeading headingText={"Авторизация"} headingType={"h1"} />
        <form onSubmit={handleSubmit(onLoginFormSubmit)} className="login">
          <div className="authorisation">
            <Controller
              name="useremail"
              control={control}
              render={({ field }) => (
                <AppInput
                  isError={errors.useremail ? true : false}
                  errorMessage={errors.useremail?.message}
                  type={"email"}
                  placeholder={"E-mail"}
                  {...field}
                />
              )}
            />
            <Controller
              name="userpassword"
              control={control}
              render={({ field }) => (
                <AppInput
                  isError={errors.userpassword ? true : false}
                  errorMessage={errors.userpassword?.message}
                  type={"password"}
                  placeholder={"Пароль"}
                  {...field}
                />
              )}
            />
            <AppButton type="submit" buttonText={"Войти"} className={""} />
          </div>
        </form>
      </div>
    </SCLoginPage>
  );
};
