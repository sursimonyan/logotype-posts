import cn from "classnames";

import styles from "./PostItem.module.scss";

export const PostItem = ({
  item,
  setIsOpenModal,
  setPostdata,
  isFullWidth = false,
}) => {
  const openModal = () => {
    setIsOpenModal(true);
    setPostdata(item);
    document.body.style.overflow = "hidden";
  };

  return (
    <article
      className={cn(
        styles.postitem,
        isFullWidth && styles.postitem__full_width,
      )}
      onClick={openModal}
    >
      <div className={cn(styles.postitem__image_wrap)}>
        <img
          src={item.img}
          srcSet={`${item.img_2x} 2x`}
          className={styles.postitem__image}
          alt={item.title}
        />
      </div>
      <span className={styles.postitem__tag}>{item.tags}</span>
      <h3 className={styles.postitem__title}>{item.title}</h3>
      <div className={styles.postitem__info}>
        <h6 className={styles.postitem__author}>{item.autor}</h6>
        <span className={styles.postitem__date}>{item.date}</span>
        <span className={styles.postitem__views}>{item.views} Views</span>
      </div>
      <p className={styles.postitem__description}>{item.text}</p>
    </article>
  );
};

export default PostItem;
