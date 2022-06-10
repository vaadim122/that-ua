import { Container, Row } from "react-bootstrap";

import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";

import icon_fb from "../../assets/images/fac-icon.png";
import icon_tl from "../../assets/images/telegram.png";
import icon_go from "../../assets/images/google.png";

import "../../assets/scss/block/forms.scss";

const FormSection = (content) => {
  return (
    <div className="form-page">
      <Container>
        <Row className="justify-content-center">
          <div className="col-5">
            <div className="that-form that-sign-in d-flex">
              <div className="that-form__wrapper text-center">
                <span className="that-form__close"></span>
                <h5 className="that-form__heading padding-15b">
                  {content.title}
                </h5>
                <p className="that-form__text padding-30b">{content.text}</p>
                <div className="that-form__social-icon">
                  {content.telegram_icon ? (
                    <a href="/" className="telegram">
                      <img src={icon_tl} alt="google-icon" />
                    </a>
                  ) : (
                    ""
                  )}

                  <a href="/" className="google">
                    <img src={icon_go} alt="google-icon" />
                  </a>

                  <a href="/" className="facebook">
                    <img src={icon_fb} alt="facebook-icon" />
                  </a>
                </div>
                <div className="that-form__form padding-30t">
                  {content.sign_up ? <FormSignUp /> : ""}
                  {content.sign_in ? <FormSignIn /> : ""}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default FormSection;
