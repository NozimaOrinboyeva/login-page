import React, { useState } from "react";
import { Table, Button } from "antd";
import AddAddressModal from "../action/AddAddressModal";
import ViewAddressModal from "../action/ViewAddressModal";
import { PlusOutlined } from "@ant-design/icons";
import "./TaskTable.css";

const TaskTable = () => {
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [data, setData] = useState([
    {
      key: 1,
      fullAddress: "",
      street: "Bayern",
      house: 1,
      postal: 80333,
      city: "München",
      state: "Xorazm",
      country: "Uzbekistan",
    },
  ]);

  const handleAddData = (values) => {
    const newItem = {
      key: Date.now(),
      ...values,
    };
    setData([...data, newItem]);
    setOpen(false);
  };

  // 👉 COLUMNS shu yerda bo‘lishi shart!
  const columns = [
    { title: "Full Address", dataIndex: "fullAddress" },
    { title: "Street", dataIndex: "street" },
    { title: "House No", dataIndex: "house" },
    { title: "Postal Code", dataIndex: "postal" },
    { title: "City", dataIndex: "city" },
    { title: "State", dataIndex: "state" },
    { title: "Country", dataIndex: "country" },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="actions">

          {/* VIEW */}
          <button
            className="action-btn green"
            onClick={() => {
              setSelectedItem(record);
              setViewOpen(true);
            }}
          >
            <i className="la la-eye"></i>
          </button>

          {/* EDIT */}
          <button className="action-btn blue">
            <i className="la la-edit"></i>
          </button>

          {/* DELETE */}
          <button className="action-btn red">
            <i className="la la-trash"></i>
          </button>

        </div>
      ),
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="top-bar">
        <h1>Address</h1>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        >
          Add new address
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{ pageSize: 10 }}
      />

      <AddAddressModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddData}
      />

      <ViewAddressModal
        open={viewOpen}
        onClose={() => setViewOpen(false)}
        data={selectedItem}
      />
    </div>
  );
};

export default TaskTable;
