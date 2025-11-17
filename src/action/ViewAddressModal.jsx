import { Modal } from "antd";

const ViewAddressModal = ({ open, onClose, data }) => {
    return (
        <Modal open={open} onCancel={onClose} footer={null} title="Address details">
            <p><b>Full Address:</b> {data?.fullAddress}</p>
            <p><b>Street:</b> {data?.street}</p>
            <p><b>House No:</b> {data?.house}</p>
            <p><b>Postal Code:</b> {data?.postal}</p>
            <p><b>City:</b> {data?.city}</p>
            <p><b>State:</b> {data?.state}</p>
            <p><b>Country:</b> {data?.country}</p>
        </Modal>
    );
};

export default ViewAddressModal;
