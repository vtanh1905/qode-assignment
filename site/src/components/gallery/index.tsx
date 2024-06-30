import React from 'react';
import { Button, List, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { Image, Comment } from '../../models';
import { CommentComponent } from '../comment';

interface GalleryProps {
  images: Image[];
  onCommentSubmit(comment: Comment): Promise<void>,
  onUploadFile(file: any): Promise<void>,
}

const Gallery = ({ images, onCommentSubmit, onUploadFile } : GalleryProps) => {
  return (
    <div className={styles['gallery']}>
      <h1 className={styles['title']}>Images</h1>
      <div className={styles['upload-image']}>
        <Upload showUploadList={false} beforeUpload={onUploadFile}>
          <Button icon={<UploadOutlined />} type="primary">Upload Image</Button>
        </Upload>
      </div>
        <List
          itemLayout="vertical"
          dataSource={images}
          renderItem={(item) => (
            <List.Item>
              <div className={styles['image-wrapper']}>
                <img src={item.url} className={styles['image']} />
              </div>
              <div>
                <List
                  dataSource={item.comments}
                  renderItem={(comment) => (
                    <List.Item>
                      <strong>{comment.name}: </strong> {comment.message}
                    </List.Item>
                  )}
                  className={styles['comments']}
                  locale={{emptyText: <span></span>}}
                />
                <CommentComponent onCommentSubmit={onCommentSubmit} imageId={item.id} key={item.id}></CommentComponent>
              </div>
            </List.Item>
        )}
      />
    </div>
  );
};

export { Gallery };
