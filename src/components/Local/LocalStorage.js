import Swal from "sweetalert2";
const getStoredData = () => {
  const storedData = localStorage.getItem("donationId");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const setData = (id) => {
  const stored = getStoredData();
  const exist = stored?.find((data) => data === id);
  if (exist) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have already donate this item",
    });
  } else {
    stored.push(id);
    const strStored = JSON.stringify(stored);
    localStorage.setItem("donationId", strStored);
    Swal.fire("Good job!", "Donate Successfully", "success");
  }
};

export { getStoredData, setData };
