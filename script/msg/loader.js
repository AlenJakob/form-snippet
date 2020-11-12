// Loader Message
export const loader = () => {
  const loaderDomObj = document.querySelector("#loader");
  loaderDomObj.style.display = "block";
  setTimeout(() => (loaderDomObj.style.display = "none"), 1000);
};
