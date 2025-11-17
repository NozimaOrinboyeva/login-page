import React from "react";
import { Modal, Form, Input } from "antd";

const AddAddressModal = ({ open, onClose, onSubmit }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then(values => {
            onSubmit(values);
            form.resetFields();
        });
    };

    return (
        <Modal
            title="Add new address"
            open={open}
            onCancel={onClose}
            onOk={handleOk}
            okText="Add"
        >
            <Form form={form} layout="vertical">
                <Form.Item name="fullAddress" label="Full Address" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="street" label="Street" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="house" label="House No" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="postal" label="Postal Code" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="city" label="City" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="state" label="State" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="country" label="Country" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddAddressModal;
