import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

import Header from "../../components/Header/Header";
import { getProfilesPublc } from "../../redux/actions/profilesPublic.action";

import user_ava from "../../assets/images/user_d.jpeg";

import "../../assets/scss/block/profiles-public.scss";
import List from "../../components/PublicProfiles/List";

const ProfilesPublic = () => {
  const Authenticated = localStorage.getItem("Authenticated");
  const token = localStorage.getItem("MyToken");
  const dispatch = useDispatch();
  const profiles = useSelector(
    ({ profilesPublicReducer }) => profilesPublicReducer
  );

  useEffect(() => {
    if (Authenticated) {
      dispatch(getProfilesPublc(token));
    }
  }, [Authenticated]);

  return Authenticated ? (
    <>
      <Header />
      <div className="public-profiles-page">
        <Container className="full-width">
          <Row>
            {profiles?.map((profile, i) => (
              <Col xs={6} md={4} lg={3} className="margin-15b" key={i}>
                <div className="public-profiles-page__block">
                  <img
                    src={profile?.imageUrl ? profile?.imageUrl : user_ava}
                    alt="user avatar"
                  />
                  <div className="public-profiles-page__content">
                    <p className="margin-15b margin-15t">{profile?.name}</p>
                  </div>
                  <List id={profile?.id} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  ) : (
    ""
  );
};

export default ProfilesPublic;
