import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';



const cx = classNames.bind();

const PostItem = ({ title, body, publishedDate, tags, id}) => {
  const tagList = tags.map(
    tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
  );
  return (
    <div className={cx('post-item')}>
      <h2><Link to={`/post/${id}`}>{title}</Link></h2>
      <div className={cx('tags')}>
        {tagList}
      </div>
    </div>
  )
}

const PostList = ({posts}) => {
  const postList = posts.map(
    (post) => {
      const { _id, title, body, publishedDate, tags } = post.toJS();
      return (
        <PostItem
          title={title}
          body={body}
          publishedDate={publishedDate}
          tags={tags}
          key={_id}
          id={_id}
        />
      )
    }
  );
  return (
    <div className={cx('post-list')}>
      {postList}
    </div>
  );
};

export default PostList;
