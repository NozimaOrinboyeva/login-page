import React from "react";
import LoginForm from "./components/LoginForm";
import TaskTable from "./components/TaskTable"; // agar hali import qilinmagan bo‘lsa
import { Table } from "antd";
import AddAddressModal from "./action/AddAddressModal";
import ViewAddressModal from "./action/ViewAddressModal";
import AddressTable from "./components/AddressTable";

const App = () => {
  return (
    <>
      {/* <LoginForm /> */}
      <AddressTable />
      {/* <TaskTable /> */}
      {/* <AddAddressModal /> */}
      {/* <ViewAddressModal /> */}
    </>
  );
};

export default App;
