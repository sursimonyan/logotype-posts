import { images } from "../../assets/images";
import styles from "./Modal.module.scss";

export const Modal = ({ children, setIsOpenModal }) => {
  const closeModal = () => {
    setIsOpenModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        <span className={styles.modal__close}>
          <img src={images.CloseIcon} alt="close icon" onClick={closeModal} />
        </span>
        {children}
      </div>
    </div>
  );
};
