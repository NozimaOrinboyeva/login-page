import React from "react";
import { Modal } from "antd";

const AddressViewModal = ({ open, onClose, record }) => {
    return (
        <Modal
            title="Address Details"
            open={open}
            onCancel={onClose}
            footer={null}
            centered
        >
            {record && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr",
                        rowGap: "10px",
                        columnGap: "15px",
                        fontSize: "15px",
                        paddingTop: "10px",
                    }}
                >
                    <div><b>Full Name:</b></div> <div>{record.fullName}</div>
                    <div><b>Phone:</b></div> <div>{record.phone}</div>
                    <div><b>City:</b></div> <div>{record.city}</div>
                    <div><b>District:</b></div> <div>{record.district}</div>
                    <div><b>Street:</b></div> <div>{record.street}</div>
                </div>
            )}
        </Modal>
    );
};

export default AddressViewModal;
