import React from 'react'
import { Input, Button, Form } from 'antd'


interface CommentProps {
    imageId: number,
    onCommentSubmit(comment: any): Promise<void>,
}

const CommentComponent = ({ imageId, onCommentSubmit } : CommentProps) => {
  const [form] = Form.useForm();

  const handleCommentSubmit = async (value: any) => {
    await onCommentSubmit(value);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleCommentSubmit} initialValues={{ image_id: imageId }}>
        <Form.Item name={`image_id`} hidden>
        <Input />
        </Form.Item>
        <Form.Item name={`name`} rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item name={`message`} rules={[{ required: true, message: 'Please enter a comment' }]}>
        <Input.TextArea placeholder="Leave a comment..." rows={4} />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
    </Form>
  );
};

export { CommentComponent };
