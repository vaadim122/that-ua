const FormSignUp = () => {
  return (
    <form action="">
      <label htmlFor="email" className="p-small margin-25b">
        <input type="text" id="name" name="name" placeholder="Ім’я*" />
      </label>
      <label htmlFor="email" className="p-small margin-25b">
        Емейл*
        <input type="email" id="email" name="email" />
      </label>

      <label htmlFor="phone" className="p-small margin-25b">
        Телефон*
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </label>

      <label htmlFor="password" className="p-small margin-25b">
        Пароль*
        <input id="userPassword" type="password" name="password" />
      </label>

      <div className="that-form__form--btn margin-20t">
        <button className="btn-primary" type="button">
          Зареєструватись
        </button>
        <button className="btn-primary" type="button">
          Маю аккаунт
        </button>
      </div>
    </form>
  );
};
export default FormSignUp;
