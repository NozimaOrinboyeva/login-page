import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";

import AddressViewModal from "../action/AddressViewModal";
import AddressEditModal from "../action/AddressEditModal";
import AddressAddModal from "../action/AddressAddModal";

import {
    getAddresses,
    deleteAddress,
    updateAddress,
    addAddress
} from "../api/address";

const AddressTable = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(false);

    const [viewOpen, setViewOpen] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);

    const [editOpen, setEditOpen] = useState(false);
    const [editRecord, setEditRecord] = useState(null);

    const [addOpen, setAddOpen] = useState(false);

    const loadData = async () => {
        setLoading(true);
        try {
            const res = await getAddresses();
            setAddresses(res.data);
        } catch (err) {
            message.error("Failed to load addresses");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleView = (record) => {
        setCurrentRecord(record);
        setViewOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteAddress(id);
            message.success("Address deleted!");
            loadData();
        } catch {
            message.error("Failed to delete address");
        }
    };

    const handleEdit = (record) => {
        setEditRecord(record);
        setEditOpen(true);
    };

    const handleSave = async (id, values) => {
        try {
            await updateAddress(id, values);
            message.success("Address updated!");
            setEditOpen(false);
            loadData();
        } catch {
            message.error("Failed to update address");
        }
    };

    const handleAdd = async (values) => {
        try {
            await addAddress(values);
            message.success("Address added!");
            setAddOpen(false);
            loadData();
        } catch {
            message.error("Failed to add address");
        }
    };

    const columns = [
        { title: "Full Name", dataIndex: "fullName" },
        { title: "Phone", dataIndex: "phone" },
        { title: "City", dataIndex: "city" },
        { title: "District", dataIndex: "district" },
        { title: "Street", dataIndex: "street" },
        {
            title: "Action",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "8px" }}>
                    {  }
                    <button className="action-btn view-btn" onClick={() => handleView(record)}>
                        <i className="lar la-eye"></i>
                    </button>

                    { }
                    <button className="action-btn edit-btn" onClick={() => handleEdit(record)}>
                        <i className="las la-edit"></i>
                    </button>

                    {  }
                    <button className="action-btn delete-btn" onClick={() => handleDelete(record.id)}>
                        <i className="las la-trash"></i>
                    </button>
                </div>
            )
        }

    ];

    return (
        <div className="wrapper">
            <div style={{ padding: 20 }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20
                }}>
                    <h2 style={{ margin: 0 }}>Address</h2>

                    <button
                        onClick={() => setAddOpen(true)}
                        style={{
                            padding: "8px 14px",
                            border: "none",
                            borderRadius: 6,
                            backgroundColor: "#1677ff",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        Add Address
                    </button>
                </div>

                <Table
                    columns={columns}
                    dataSource={addresses}
                    rowKey="id"
                    loading={loading}
                    bordered
                />
            </div>

            <AddressViewModal
                open={viewOpen}
                onClose={() => setViewOpen(false)}
                record={currentRecord}
            />

            <AddressEditModal
                open={editOpen}
                onClose={() => setEditOpen(false)}
                record={editRecord}
                onSave={handleSave}
            />

            <AddressAddModal
                open={addOpen}
                onClose={() => setAddOpen(false)}
                onSave={handleAdd}
            />
        </div>
    );
};

export default AddressTable;
