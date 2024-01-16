import React from "react";
import icons from "../assets/icons/icons.png";
import profile from "../assets/images/profile.png";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: contain;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  bottom: 8px;
  right: 5px;
  position: absolute;
  background-color: transparent;
`;
const Profile = () => {
  return (
    <section>
      <h5 className="p-4 bg-white shadow-sm">Account Settings</h5>
      <div className="details p-3">
        <div className="d-flex align-items-center ">
          <div className="profile-image position-relative">
            <StyledImage src={profile} alt="profile" />
            <span>
              <StyledIcon src={icons} alt="icon" />
            </span>
          </div>
          <div className="profile-about ps-3">
            <h6 className="mb-0">Marry Doe</h6>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="pt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </section>
  );
};

export default Profile;
