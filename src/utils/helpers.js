import moment from "moment";
const calculateCost = (item) => {
  return item.amount * parseInt(item.price);
};
const dateFormat = (date) => {
  return moment(date).format("MM/DD/YYYY [at] h:mmA");
};

const orderNumber = () => {
  const randomId = Math.floor(100000 + Math.random() * 900000);
  return `#${randomId}`;
};

export default {
  calculateCost,
  dateFormat,
  orderNumber,
};
