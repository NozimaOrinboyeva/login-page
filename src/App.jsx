import React from "react";
import AddressTable from "./components/AddressTable";
import AddressViewModal from "./action/AddressViewModal";
import AddressAddModal from "./action/AddressAddModal";


const App = () => {
  return (
    <>
      {/* <LoginForm /> */}
      <AddressTable />
      <AddressViewModal />
      <AddressAddModal />
      {/* <TaskTable /> */}
      {/* <AddAddressModal /> */}
      {/* <ViewAddressModal /> */}
    </>
  );
};

export default App;
