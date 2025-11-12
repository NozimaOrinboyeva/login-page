import { useContext, useEffect, useState } from "react";
import useLanguage from "../hooks/useLanguage";
import { LangContext } from "../context/LanguageContext";
import './LoginForm.css';

function Login() {

    const [login, setLogin ] = useState([])
    const { language, setLanguage } = useContext(LangContext);
    const { t } = useLanguage();

    const getLogin = () => {
        fetch("https://9cf59ad24cc24f2e.mokky.dev/login")
        .then((res) => res.json())
        .then((data) => setLogin(data))
    }

    useEffect(() => {
        getLogin();   
    }, []);
    console.log(login)

    const handleChange = (e) => {
        localStorage.setItem("lang", e.target.value);
        setLanguage(e.target.value);
    };

    return (
        <div className="container">
            <div className="box">
                <div className="loginPage">
                    <div className="loginPage__title">{t("text")}</div>
                    <form>
                        <div className="loginPage__input">
                            <p className="loginPage__text">{t("emails")}</p>
                            <input type="email" className="loginPage__inputt" />
                            <p className="loginPage__text">{t("Ptext")}</p>
                            <input type="password" className="loginPage__inputt" />
                            <div className="loginPage__check">
                                <label>
                                    <input type="checkbox" />
                                    {t("rember")}
                                </label>
                            </div>
                        </div>
                    </form>
                    <button className="loginPage__button">{t("login")}</button>
                </div>
                <div className="loginPage__bottom">
                    <a href="#">Lost your password?</a>
                    <a href="#">Create an account?</a>
                </div>

                <div className="language-switcher">
                    <select
                        name="locale"
                        id="locale"
                        value={language}
                        onChange={handleChange}
                    >
                        <option value="uzbek">Uzbek</option>
                        <option value="russian">Russian</option>
                        <option value="english">English</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Login;
