import React from "react";
import Scheme from "../pages/developer/settings/scheme/Scheme.jsx";
import { setIsAdd } from "../store/StoreAction.jsx";
import { StoreContext } from "../store/StoreContext.jsx";

// Mac // Mc // Mon // Cy
const urlPathFca = "http://localhost/react-vite/viter-fca-v2";
const imgUrlPathFca = "http://localhost/react-vite/viter-fca-v2/public/img";

// // // Patrick
// export const urlPathFca = `https://app.fca.edu.ph`;
// export const imgUrlPathFca = `https://app.fca.edu.ph/img`;

// // // Local Dev and Online Dev URL
export const devApiUrl = `${urlPathFca}/rest`;
export const devBaseUrl = `${urlPathFca}`;
export const devBaseImgUrl = `${imgUrlPathFca}`;
export const devNavUrl = "/v2";

// ONLINE PRODUCTION START HERE //

// // Online URL prod
// export const devApiUrl = "https://app.fca.edu.ph/rest";
// export const devBaseUrl = "https://app.fca.edu.ph";
// export const devBaseImgUrl = "https://app.fca.edu.ph/img";
// export const devNavUrl = "/v2";

export const schemeCId = 3;

export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

export const isDemoMode = 1;
export const pesoSign = <span className="mr-1">&#8369;</span>;

// Copyright year
export const copyrightYear = () => {
  return new Date().getFullYear();
};

// format the numbers separated by comma
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
// format the numbers separated by comma
export const numberWithCommasToFixed = (item, x) => {
  let result = numberWithCommas(Number(item).toFixed(x));

  return result;
};

// get the url id parameter
export const getUrlParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
};

// storage after login
export function setStorageRoute(jwt, isDev) {
  localStorage.setItem(
    "fcatoken",
    JSON.stringify({ token: jwt, isDev: isDev })
  );
}

// formatting date
export const formatDate = (dateVal) => {
  const d = new Date(dateVal);
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[month]} ${date}, ${year}`;
};

// formatting date by type month
export const formatDateMonth = (dateVal) => {
  const d = new Date(dateVal);
  const year = d.getFullYear();

  const month = d.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[month]} ${year}`;
};

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};

// console log values
export const consoleLog = (values, param2 = null) => {
  console.log(values, param2);
};

export const closeModal = (setShow, dispatch) => {
  setShow("");
  setTimeout(() => {
    dispatch(setIsAdd(false));
  }, 200);
};

export const handleNumOnly = (e) => {
  if ((e.charCode < 48 || e.charCode > 57) && e.charCode !== 46) {
    e.preventDefault();
  }
};

export const handleEscape = (handleClose) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
};

export const ordinal = (n) => {
  let result = "";
  let s = ["th", "st", "nd", "rd"];
  let v = n % 100;

  result = n + (s[(v - 20) % 10] || s[v] || s[0]);

  return result.replaceAll(",", "");
};

export const getDateNow = () => {
  return new Date(new Date().toString().split("GMT")[0] + " UTC")
    .toISOString()
    .split("T")[0];
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};

export const getPesoSign = new Intl.NumberFormat("ph-PH", {
  style: "currency",
  currency: "PHP",
});

export const formatMobileNumber = (x) => {
  let mobile = x.toString();
  mobile = mobile.replace(/\D+/g, "");
  mobile = `+63 (${mobile.substr(1, 3)}) ${mobile.substr(4, 3)}-${mobile.substr(
    7,
    4
  )}`;
  return mobile;
};

// Format number 5622212 to 562-2212
export const formatLandlineNumber = (x) => {
  let tel = x.toString();
  tel = tel.replace(/\D+/g, "");
  tel = `${tel.substr(0, 3)}-${tel.substr(3, 5)}`;
  return tel;
};

// get user type
export const getUserType = () => {
  const { store } = React.useContext(StoreContext);

  // let link = `${devNavUrl}/system`;
  let link = "";

  store.credentials.data.role_is_developer === 1
    ? (link = `${devNavUrl}/system`)
    : store.credentials.data.role_is_admin === 1
    ? (link = `${devNavUrl}/${store.credentials.data.role_name.toLowerCase()}`)
    : store.credentials.data.role_is_trainer === 1
    ? (link = `${devNavUrl}/${store.credentials.data.role_name.toLowerCase()}`)
    : store.credentials.data.role_is_accounting === 1
    ? (link = `${devNavUrl}/${store.credentials.data.role_name.toLowerCase()}`)
    : (link = `${devNavUrl}/${store.credentials.data.role_name.toLowerCase()}`);

  return link;
};

export const isItemEmpty = (item, name = "") => {
  let result = "N/A";

  if (item !== "") {
    result = `${item}${name}`;
  }
  return result;
};

export const getLastAndCurrentSchoolYear = (schoolYear) => {
  let lastSY = "";
  let currentSY = "";

  if (schoolYear?.count > 0) {
    const current = schoolYear?.data.filter(
      (item) => item.school_year_is_active === 1
    );

    const last = schoolYear?.data.filter(
      (item) => item.school_year_is_active === 1
    );

    currentSY = current[0]?.school_year;
    lastSY = last[0]?.school_year;
  }
  return { currentSY, lastSY };
};
