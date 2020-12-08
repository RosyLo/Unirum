import { React, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileShow from './ProfileShow';
import ProfileContent from './ProfileContent';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user);
  const params = new URLSearchParams(window.location.search);
  const paramsID = params.get('id');

  let view = '';

  if (!user) {
    //visitor
    view = (
      <>
        <ProfileShow paramsID={paramsID} />
        <ProfileContent paramsID={paramsID} />
      </>
    );
  } else if (user.uid === paramsID) {
    //master?
    view = (
      <>
        <ProfileShow paramsID={paramsID} />
        <ProfileContent paramsID={paramsID} />
      </>
    );
  } else {
    //viewer
    view = (
      <>
        <ProfileShow paramsID={paramsID} />
        <ProfileContent paramsID={paramsID} />
      </>
    );
  }

  return <>{view}</>;
}

export default Profile;
