import React, { useState } from 'react';
import { Input, Button, List, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

const Gallery = () => {
  const [comments, setComments] = useState<any>([]);
  const [form] = Form.useForm();

  const handleCommentSubmit = (values: any) => {
    const newComment = `${values.name}: ${values.comment}`;
    setComments([...comments, newComment]);
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
        dataSource={imageData}
        renderItem={(item) => (
          <List.Item>
            <div className={styles['image-wrapper']}>
              <img src={item.imageUrl} alt={item.title} className={styles['image']} />
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
                <Form.Item name="comment" rules={[{ required: true, message: 'Please enter a comment' }]}>
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

const imageData = [
  { imageUrl: 'https://vtanh1905-qode-assignment.s3.ap-southeast-1.amazonaws.com/images/Screenshot+2024-03-04+130235.png', title: 'Image 1', comments: [{ name: 'Nguyen Van A', message: 'Hay qua' }, { name: 'Nguyen Van A', message: 'Lai Qua' }] },
  { imageUrl: 'https://vtanh1905-qode-assignment.s3.ap-southeast-1.amazonaws.com/images/Screenshot+2024-03-06+095323.png', title: 'Image 2', comments: [{ name: 'Nguyen Van A', message: 'Hay qua' }] },
];