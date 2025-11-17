import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import { getAddresses, deleteAddress } from "../api/address";

const AddressTable = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const handleDelete = async (id) => {
        try {
            await deleteAddress(id);
            message.success("Address deleted!");
            loadData();
        } catch (err) {
            message.error("Failed to delete address");
        }
    };

    const columns = [
        { title: "Full Name", dataIndex: "fullName", key: "fullName" },
        { title: "Phone", dataIndex: "phone", key: "phone" },
        { title: "City", dataIndex: "city", key: "city" },
        { title: "District", dataIndex: "district", key: "district" },
        { title: "Street", dataIndex: "street", key: "street" },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (

                
                <div style={{ display: "flex", gap: "8px" }}>

                    { }
                    <Button
                        shape="circle"
                        style={{
                            border: "1px solid #91d5ff",
                            color: "#1890ff",
                            transition: ".2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#bae7ff")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#e6f7ff")}
                        onClick={() => handleView(record)}
                    >
                        <i className="lar la-eye" style={{ fontSize: "18px" }}></i>
                    </Button>

                    { }
                    <Button
                        shape="circle"
                        style={{
                            border: "1px solid #b7eb8f",
                            color: "#52c41a",
                            transition: ".2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#d9f7be")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#f6ffed")}
                        onClick={() => handleEdit(record)}
                    >
                        <i className="las la-edit" style={{ fontSize: "18px" }}></i>
                    </Button>

                    { }
                    <Button
                        danger
                        shape="circle"
                        style={{
                            border: "1px solid #ffa39e",
                            transition: ".2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#ffccc7")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#fff1f0")}
                        onClick={() => handleDelete(record.id)}
                    >
                        <i className="las la-trash" style={{ fontSize: "18px" }}></i>
                    </Button>

                </div>

            ),
        },
    ];



    return (
        <div className="wrapper">
            <div style={{ padding: 20 }}>
                <h2>Address</h2>
                <Table
                    columns={columns}
                    dataSource={addresses}
                    rowKey="id"
                    loading={loading}
                    bordered
                />
            </div>
        </div>
    );
};

export default AddressTable;
