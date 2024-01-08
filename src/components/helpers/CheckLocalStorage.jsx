export const checkLocalStorage = () => {
  let fcatoken = null;
  try {
    fcatoken = JSON.parse(localStorage.getItem("fcatoken"));
  } catch (error) {
    fcatoken = null;
  }

  return fcatoken;
};
