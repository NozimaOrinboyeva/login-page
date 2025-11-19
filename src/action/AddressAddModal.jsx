import React from "react";
import { Modal, Form, Input, Button } from "antd";

const AddressAddModal = ({ open, onClose, onSave }) => {
    const [form] = Form.useForm();

    const handleSubmit = () => {
        form.validateFields().then(values => {
            onSave(values);
            form.resetFields();
        });
    };

    return (
        <Modal
            title="Add New Address"
            open={open}
            onCancel={onClose}
            centered
            footer={[
                <Button key="cancel" onClick={onClose}>Cancel</Button>,
                <Button key="save" type="primary" onClick={handleSubmit}>
                    Save
                </Button>
            ]}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="city" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="District" name="district" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Street" name="street" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddressAddModal;
