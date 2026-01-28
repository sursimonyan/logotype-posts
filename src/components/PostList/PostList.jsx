import cn from "classnames";
import PostItem from "../PostItem/PostItem";
import { Modal } from "../Modal/Modal";
import { Loader } from "../Loader/Loader";

import styles from "./PostList.module.scss";
import { useState } from "react";

export const PostList = ({ posts, loading, error }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [postData, setPostdata] = useState();

  return (
    <section className={cn(styles.postlist, "container")}>
      {posts?.length
        ? posts?.map((item) => (
            <PostItem
              item={item}
              key={item.title}
              setIsOpenModal={setIsOpenModal}
              setPostdata={setPostdata}
            />
          ))
        : null}
      {!posts.length && !loading && (
        <h3 className={styles.postlist__no_result}>No result</h3>
      )}
      {loading && <Loader />}
      {error && <h3 className={cn(styles.postlist__error)}>{error}</h3>}
      {isOpenModal && (
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <PostItem item={postData} isFullWidth={true} />
        </Modal>
      )}
    </section>
  );
};
