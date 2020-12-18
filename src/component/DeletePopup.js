import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { deletePost } from '../redux/actions';
import styles from '../style/popup.module.css';
import { StyleModal } from './PopupModal';
import styled from '../style/editpostpopup.module.css';

function DeletePopup({
  deletePostID,
  setisDeletePopupClick,
  isDeletePopupClick,
  setIsDeletePopup,
}) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const deletepost = posts.find((post) => post.postID === deletePostID);

  return (
    <StyleModal
      show={isDeletePopupClick}
      handleClose={() => {
        setisDeletePopupClick(false);
      }}>
      <div className={styles.modelWrap}>
        <div className={styles.topModel}></div>
        <div className={styled.buttonModal}>
          <div className={styles.leftModel}>
            {deletepost ? <Post post={deletepost} isFromDelete={true} /> : ''}
          </div>

          <div className={styles.rightModel}>
            <div className={styles.decideBlock} style={{ margin: '0px 0px 50px 0px' }}>
              <div className={styles.blockTitle}>Think Twice</div>
              <p className={styled.deleteBlockSubTitle}>Say GoodBye to the Story?</p>
              <div className={styled.decideButtonBlock}>
                <button
                  className={styles.decideButton}
                  onClick={() => {
                    setisDeletePopupClick(false);
                  }}>
                  Back
                </button>
                <button
                  className={styles.decideButton}
                  onClick={() => {
                    dispatch(deletePost(deletepost, setisDeletePopupClick));
                    setIsDeletePopup(true);
                  }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleModal>
  );
}

DeletePopup.propTypes = {
  deletePostID: PropTypes.string.isRequired,
  setisDeletePopupClick: PropTypes.func.isRequired,
  setIsDeletePopup: PropTypes.func.isRequired,
  isDeletePopupClick: PropTypes.bool.isRequired,
};

export default DeletePopup;
