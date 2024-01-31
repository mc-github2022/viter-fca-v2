import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  info: false,
  success: false,
  validate: false,
  isSave: false,
  isScroll: 0,
  isShow: false,
  isConfirm: false,
  isSettingConfirm: false,
  isRestore: false,
  isDelete: false,
  isSettingDelete: false,
  isAdd: false,
  isEdit: false,
  isInputVal: 0,
  isView: false,
  isFeedback: false,
  isSearch: false,
  startIndex: 0,
  isCreatePassSuccess: false,
  isForgotPassSuccess: false,
  isLogin: false,
  isLogout: false,
  isAccountUpdated: false,
  isUploadFile: false,
  isSettingAdd: false,
  credentials: {},
  personalInfo: {},
  academicInfo: {},
  isRefresh: false,
  isToolsOpen: false,
  isSettingsOpen: false,
  scrollPosition: 0,
  quickEditID: 0,
  isShowModal: true,
  isMenuExpand: true,
  lastIdInserted: null,
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
