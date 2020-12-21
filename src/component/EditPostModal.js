import React from 'react';
import styled from 'styled-components';
import styles from '../style/popup.module.css';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import cross from '../img/cross.png';

const ModalWrap = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: grey;
  opacity: 0.9;
  z-index: 4;
`;

const ContentDiv = styled.div`
max-width: 800px;
  min-width: 300px;
  max-height:800px;
  max-width: 800px;
  width:70%;
  padding:2%
  align-items:center
  max-width: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  border-radius: 5px;
  box-shadow: 3px 3px 3px #ced1d6;
  display:block;
  background: rgb(250, 250, 250);

`;

export const EditPostModal = ({ handleClose, show, children }) => {
  return ReactDom.createPortal(
    <ModalWrap show={show}>
      <ContentDiv>
        <div className={styles.cancelButton} onClick={handleClose}>
          <img className={styles.cancelButtonImg} src={cross}></img>
        </div>
        {children}
      </ContentDiv>
      <ModalDiv></ModalDiv>
    </ModalWrap>,
    document.getElementById('portal'),
  );
};

EditPostModal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.object,
};