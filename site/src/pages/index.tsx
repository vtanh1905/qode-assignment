import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { Gallery } from '../components';
import { getData, postData } from '../utils/fetcher';
import { Comment } from '../models';
import { API } from '../utils/constants';
import useSWRMutation from 'swr/mutation';

const Home = () => {
  const { data: images, error } = useSWR(API.IMAGES, getData);
  const { trigger } = useSWRMutation(API.COMMENTS, postData);
  const { mutate } = useSWRConfig();

  if (error) {
    return <div>Error loading images</div>;
  }

  if (!images) {
    return <div>Loading images...</div>;
  }

  const onCommentSubmit = async (comment: Comment) => {
    await trigger({
      image_id: 1,
      ...comment,
    });
    mutate(API.IMAGES);
  }

  return (
    <div className="App">
      <Gallery images={images} onCommentSubmit={onCommentSubmit}></Gallery>
    </div>
  )
};

export default Home;