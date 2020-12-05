import { generateRecord, createRecordTable, displayAvg } from "./index.js";

const data = [];

const render = (recordData) => {
  createRecordTable(recordData);
  displayAvg(recordData);
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  data.push(generateRecord(event.target.elements));
  render(data);
});
