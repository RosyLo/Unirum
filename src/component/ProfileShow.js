import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from '../style/profileshow.module.css';
import firebase from '../firebase';
import styled from 'styled-components';
import Loading from './Loading';

function ProfileShow({ paramsID }) {
  const [profile, setProfile] = useState(null);
  const user = useSelector((state) => state.user);
  const masterposts = useSelector((state) => state.masterposts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [masterposts]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('User')
      .doc(paramsID)
      .get()
      .then((doc) => {
        setProfile(doc.data());
      });
  }, []);

  return (
    <div className={styles.profileShowWrap}>
      {isLoading === false && profile ? (
        <div className={styles.profileShow}>
          <img className={styles.profilePic} src={profile.userProfileImage}></img>
          <div className={styles.profileInfo}>
            <div>{profile.userName}</div>
            <div className={styles.followerBlock}>
              <div className={styles.followerInfo}>
                {masterposts.length} <span>Posts</span>
              </div>
              <div className={styles.followerInfo}>＿Followers</div>
              <div className={styles.followerInfo}>＿Following</div>
            </div>
          </div>
          {/* <div className={styles.profileWords}>{profile.profileMessage}</div> */}
          {/* <div className={styles.block}></div> */}
        </div>
      ) : (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
    </div>
  );
}

ProfileShow.propTypes = {
  paramsID: PropTypes.string,
};

export default ProfileShow;
