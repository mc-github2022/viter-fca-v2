import { setSuccess } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaCheck } from "react-icons/fa";

const ModalSuccess = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  // GetFocus("btnClose");

  const handleClose = () => {
    setTimeout(() => {
      setShow("");
      dispatch(setSuccess(false));
      if (store.isAccountUpdated) {
        localStorage.removeItem("fcatoken");
        store.credentials.data.role_is_developer !== 1
          ? window.location.replace(`${devNavUrl}/system/login`)
          : window.location.replace(`${devNavUrl}/login`);
        // dispatch(setIsAccountUpdated(false));
        return;
      }
    }, 2000);
  };

  React.useEffect(() => {
    handleClose();
  });

  return (
    <>
      <div
        className={` !bg-white border shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-l-4 border-l-green-800 rounded-md px-4 py-3 fixed top-7 z-50 left-1/2 -translate-x-1/2 animate-fadeIn ${show}`}
      >
        <p className="flex items-center gap-3 mb-0 animate-slideUp">
          <FaCheck className="fill-green-800 h-4 w-4" /> {store.message}
        </p>
      </div>
    </>
  );
};

export default ModalSuccess;
