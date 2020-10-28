import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import placifyApi from "../../services/placifyApi";

import Popover from "../Popover";

import userAlt from "../../assets/user-alt.svg";

import useUserProfileButtonStyles from "./useUserProfileButtonStyles";

import { Profile } from "../../types";

function UserProfileButton(): React.ReactElement {
  const classes = useUserProfileButtonStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [userProfile, setUserProfile] = useState<Profile>();

  useEffect(() => {
    placifyApi.get("/users/profile").then(({ data }) => {
      setUserProfile(data);
    });
  }, []);

  function handleClosePopover() {
    setAnchorEl(null);
  }

  if (!userProfile) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button
        type="button"
        className={classes.root}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <img
          className={classes.userImage}
          src={userProfile.images?.[0]?.url ?? userAlt}
          width={30}
          height={30}
          alt="user profile"
        />
        <p className={classes.userName}>{userProfile.name}</p>
        <FaAngleDown size={16} />
      </button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        onClose={handleClosePopover}
      >
        <div>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          <br />
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          <br />
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          <br />
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          <br />
          sobreviveu não só a cinco séculos, como também ao salto para a
          <br />
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          <br />
          popularizou na década de 60, quando a Letraset lançou decalques
          <br />
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          <br />
          ser integrado a softwares de editoração eletrônica como Aldus
          <br />
          PageMaker.
        </div>
      </Popover>
    </>
  );
}

export default UserProfileButton;
