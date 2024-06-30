import React from 'react';
import { Input, Button, List, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { Image, Comment } from '../../models';

interface GalleryProps {
  images: Image[];
  onCommentSubmit(comment: Comment): Promise<void>,
}

const Gallery = ({ images, onCommentSubmit } : GalleryProps) => {
  const [form] = Form.useForm();

  const handleCommentSubmit = async (value: any) => {
    await onCommentSubmit(value);
    form.resetFields();
  };

  const handleUpload = (file: any) => {
    // Handle file upload logic
  };

  return (
    <div className={styles['gallery']}>
      <h1 className={styles['title']}>Images</h1>
      <div className={styles['upload-image']}>
        <Upload beforeUpload={handleUpload}>
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
              />
              <Form form={form} onFinish={handleCommentSubmit}>
                <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                  <Input placeholder="Your name" />
                </Form.Item>
                <Form.Item name="message" rules={[{ required: true, message: 'Please enter a comment' }]}>
                  <Input.TextArea placeholder="Leave a comment..." rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
              </Form>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export { Gallery };
