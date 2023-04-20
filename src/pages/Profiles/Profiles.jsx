import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header/Header";
import { editProfile } from "../../redux/actions/tasks.actions";

import user_ava from "../../assets/images/user_d.jpeg";

import "../../assets/scss/block/profile.scss";

const Profile = () => {
  const Authenticated = localStorage.getItem("Authenticated");
  const token = localStorage.getItem("MyToken");
  const dispatch = useDispatch();
  const profile = useSelector(({ profileReducer }) => profileReducer);
  const [name, setName] = useState(" ");
  const [avatar, setAvatar] = useState(user_ava);
  const [base64Data, setBase64Data] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setName(profile?.name);
    setChecked(profile?.isPublic ? profile?.isPublic : false);
    setAvatar(profile?.imageUrl ? profile?.imageUrl : user_ava);
  }, [profile]);
  useEffect(() => {
    base64Data && setAvatar(`data:image;base64,${base64Data}`);
  }, [base64Data]);

  const EditProfile = () => {
    dispatch(editProfile(name, base64Data, checked, token));
  };

  const onChange = (e) => {
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  };
  const _handleReaderLoaded = (e) => {
    let binaryString = e.target.result;
    setBase64Data(btoa(binaryString));
  };
  const editDiseble =
    profile?.name === name &&
    base64Data === null &&
    profile?.isPublic === checked;

  return Authenticated ? (
    <>
      <Header />
      <div className="profile-page">
        {profile?.id && (
          <div className="profile-page__wrapper">
            <div className="margin-25b">
              <h1>My profile</h1>
            </div>
            <div className="margin-5t margin-5b profile-page__img">
              <label htmlFor="userphoto" className="profile-page__img--hover">
                <img src={avatar} alt="user avatar" />
                <input
                  className="profile-page__img--input"
                  type="file"
                  name="image"
                  id="userphoto"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
            <div className="margin-35t margin-5b profile-page__input">
              <label htmlFor="username" className="p-small">
                Name:
                <input
                  type="text"
                  id="username"
                  value={name || " "}
                  onChange={({ target: { value } }) => setName(value)}
                />
              </label>
            </div>
            <div className="margin-25t margin-5b profile-page__isPublick">
              <label htmlFor="publick">
                <input
                  id="publick"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <span></span>
                profile is public
              </label>
            </div>
            {/* <div className="margin-25t margin-5b profile-page__mail">
              <p className="p-small">
                User Name:
                <span className="">{profile?.userName}</span>
              </p>
            </div> */}
            <div className="profile-page__btn margin-55t">
              <button
                className={`btn-primary ${
                  editDiseble && "btn-primary__disabled"
                }`}
                type="button"
                onClick={EditProfile}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    ""
  );
};

export default Profile;
