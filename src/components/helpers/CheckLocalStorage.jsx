export const checkLocalStorage = () => {
  let fcaToken = null;
  try {
    fcaToken = JSON.parse(localStorage.getItem("fcaToken"));
  } catch (error) {
    fcaToken = null;
  }

  return fcaToken;
};
