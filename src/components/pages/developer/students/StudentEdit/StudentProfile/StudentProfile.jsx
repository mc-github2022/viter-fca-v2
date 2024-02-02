import React from "react";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { StoreContext } from "@/components/store/StoreContext";
import StudentProfileForm from "./StudentProfileForm.jsx";

const StudentProfile = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  if (index === 1) {
    return (
      <>
        <div className="py-3">
          <div className="bg-primary">
            <h2 className="mb-3">Student Profile</h2>
          </div>
          <StudentProfileForm />
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default StudentProfile;
