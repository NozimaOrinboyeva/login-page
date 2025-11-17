import React from "react";
import LoginForm from "./components/LoginForm";
import TaskTable from "./components/TaskTable"; // agar hali import qilinmagan bo‘lsa
import { Table } from "antd";
import AddAddressModal from "./action/AddAddressModal";
import ViewAddressModal from "./action/ViewAddressModal";

const App = () => {
  return (
    <>
      <LoginForm />
      <TaskTable />
      <AddAddressModal />
      <ViewAddressModal />
    </>
  );
};

export default App;
