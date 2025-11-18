import React, { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";

const AddressEditModal = ({ open, onClose, record, onSave }) => {
    const [form] = Form.useForm();

    // record o'zgarganda formni yangilash
    useEffect(() => {
        if (record) {
            form.setFieldsValue(record);
        }
    }, [record]);

    const handleSubmit = () => {
        form.validateFields().then(values => {
            onSave(record.id, values);   // parentga yuboriladi
        });
    };

    return (
        <Modal
            title="Edit Address"
            open={open}
            onCancel={onClose}
            centered
            footer={[
                <Button key="cancel" onClick={onClose}>Cancel</Button>,
                <Button key="save" type="primary" onClick={handleSubmit}>
                    Save
                </Button>
            ]}
            getContainer={document.body}
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

export default AddressEditModal;
