import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { Gallery } from '../components';
import { getData, postData, uploadFile } from '../utils/fetcher';
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
    await trigger(comment);
    await mutate(API.IMAGES);
  }

  const onUploadFile = async (file: any) => {
    try {
      if (!file.type.startsWith('image/')) {
        alert('Only image files are allowed!');
        return;
      }
  
      await uploadFile(API.IMAGES, file);
      await mutate(API.IMAGES);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Gallery images={images} onCommentSubmit={onCommentSubmit} onUploadFile={onUploadFile}></Gallery>
    </div>
  )
};

export default Home;