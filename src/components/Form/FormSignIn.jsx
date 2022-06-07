const FormSignIn = () => {
  return (
    <form action="">
      <label htmlFor="phone" className="p-small margin-25b">
        Телефон*
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </label>

      <label htmlFor="password" className="p-small margin-15b">
        Пароль*
        <input id="userPassword" type="password" name="password" />
      </label>

      <div className="that-form__form--check">
        <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
        <label htmlFor="rememberMe" className="margin-0b">
          Запам’ятати мене
        </label>
      </div>

      <div className="that-form__form--btn margin-135t">
        <button className="btn-primary" type="button">
          Увійти
        </button>
        <button className="btn-primary" type="button">
          Реєстрація
        </button>
      </div>
    </form>
  );
};
export default FormSignIn;
