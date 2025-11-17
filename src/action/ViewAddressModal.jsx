import { Modal } from "antd";
import "./ViewAddressModal.css";


const ViewAddressModal = ({ open, onClose, data }) => {
    return (
        <Modal open={open} 
        onCancel={onClose} 
        footer={null} 
        title="Address details"
        width={450}>
            <div className="view-box">
                <div className="view-row">
                    <span className="view-label">Full Address:</span>
                    <span className="view-value">{data?.fullAddress || "-"}</span>
                </div>
            </div>

            <div className="view-row">
                <span className="view-label">Street:</span>
                <span className="view-value">{data?.street}</span>
            </div>

            <div className="view-row">
                <span className="view-label">House No:</span>
                <span className="view-value">{data?.house}</span>
            </div>

            <div className="view-row">
                <span className="view-label">Postal Code:</span>
                <span className="view-value">{data?.postal}</span>
            </div>

            <div className="view-row">
                <span className="view-label">City:</span>
                <span className="view-value">{data?.city}</span>
            </div>

            <div className="view-row">
                <span className="view-label">State:</span>
                <span className="view-value">{data?.state}</span>
            </div>

            <div className="view-row">
                <span className="view-label">Country:</span>
                <span className="view-value">{data?.country}</span>
            </div>

            {/* <p><b>Full Address:</b> {data?.fullAddress}</p> */}
            {/* <p><b>Street:</b> {data?.street}</p> */}
            {/* <p><b>House No:</b> {data?.house}</p> */}
            {/* <p><b>Postal Code:</b> {data?.postal}</p> */}
            {/* <p><b>City:</b> {data?.city}</p> */}
            {/* <p><b>State:</b> {data?.state}</p> */}
            {/* <p><b>Country:</b> {data?.country}</p> */}
        </Modal>
    );
};

export default ViewAddressModal;
