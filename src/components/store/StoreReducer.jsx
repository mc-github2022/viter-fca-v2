export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "INFO":
      return {
        ...state,
        info: action.payload,
      };

    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "VALIDATE":
      return {
        ...state,
        validate: action.payload,
      };

    case "SAVE":
      return {
        ...state,
        isSave: action.payload,
      };

    case "SCROLL":
      return {
        ...state,
        isScroll: action.payload,
      };

    case "INPUT_Val":
      return {
        ...state,
        isInputVal: action.payload,
      };

    case "SHOW":
      return {
        ...state,
        isShow: action.payload,
      };

    case "CONFIRM":
      return {
        ...state,
        isConfirm: action.payload,
      };

    case "SETTING_CONFIRM":
      return {
        ...state,
        isSettingConfirm: action.payload,
      };

    case "RESTORE":
      return {
        ...state,
        isRestore: action.payload,
      };

    case "IS_ADD":
      return {
        ...state,
        isAdd: action.payload,
      };
    case "IS_SETTING_ADD":
      return {
        ...state,
        isSettingAdd: action.payload,
      };

    case "IS_DELETE":
      return {
        ...state,
        isDelete: action.payload,
      };

    case "IS_SETTING_DELETE":
      return {
        ...state,
        isSettingDelete: action.payload,
      };

    case "IS_UPLOAD_FILE":
      return {
        ...state,
        isUploadFile: action.payload,
      };

    case "IS_FEEDBACK":
      return {
        ...state,
        isFeedback: action.payload,
      };

    case "IS_EDIT":
      return {
        ...state,
        isEdit: action.payload,
      };

    case "IS_VIEW":
      return {
        ...state,
        isView: action.payload,
      };

    case "IS_SEARCH":
      return {
        ...state,
        isSearch: action.payload,
      };

    case "START_INDEX":
      return {
        ...state,
        startIndex: action.payload,
      };

    case "IS_CREATE_PASS_SUCCCESS":
      return {
        ...state,
        isCreatePassSuccess: action.payload,
      };

    case "IS_FORGOT_PASS_SUCCCESS":
      return {
        ...state,
        isForgotPassSuccess: action.payload,
      };

    case "IS_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };

    case "IS_LOGOUT":
      return {
        ...state,
        isLogout: action.payload,
      };

    case "IS_ACCOUNT_UPDATED":
      return {
        ...state,
        isAccountUpdated: action.payload,
      };

    case "CREDENTIALS":
      return {
        ...state,
        credentials: action.payload,
      };

    case "PERSONAL_INFO":
      return {
        ...state,
        personalInfo: action.payload,
      };

    case "ACADEMIC_INFO":
      return {
        ...state,
        academicInfo: action.payload,
      };

    case "IS_REFRESH":
      return {
        ...state,
        isRefresh: action.payload,
      };

    case "IS_TOOLS_OPEN":
      return {
        ...state,
        isToolsOpen: action.payload,
      };

    case "IS_SETTINGS_OPEN":
      return {
        ...state,
        isSettingsOpen: action.payload,
      };

    case "SCROLL_POSITION":
      return {
        ...state,
        scrollPosition: action.payload,
      };
    case "QUICK_EDIT_ID":
      return {
        ...state,
        quickEditID: action.payload,
      };

    case "IS_SHOWMODAL":
      return {
        ...state,
        isShowModal: action.payload,
      };

    case "IS_MENU_EXPAND":
      return {
        ...state,
        isMenuExpand: action.payload,
      };

    case "LAST_ID_INSERTED":
      return {
        ...state,
        lastIdInserted: action.payload,
      };

    case "IS_INVALID_REQUEST":
      return {
        ...state,
        isInvalidRequest: action.payload,
      };

    default:
      return state;
  }
};
