import { Container, Row } from "react-bootstrap";
import { useOidc } from "@axa-fr/react-oidc";

import "../../assets/scss/block/forms.scss";

const FormLogin = () => {
  const { login } = useOidc();

  return (
    <div className="form-page">
      <Container>
        <Row className="justify-content-center">
          <div className="col-5">
            <div className="that-form that-sign-in d-flex">
              <div className="that-form__wrapper text-center">
                {/* <span className="that-form__close"></span> */}
                <h5 className="that-form__heading padding-15b">Вітаємо!</h5>
                <p className="that-form__text padding-30b">
                  Увійдіть, щоб бачити підбірки друзів, створювати власні та
                  отримувати персональні рекомендації
                </p>

                <div className="that-form__form padding-30t">
                  <div className="that-form__form--btn margin-20t">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => login("/profile")}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default FormLogin;
