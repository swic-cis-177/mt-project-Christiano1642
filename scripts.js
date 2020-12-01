import{generateRecord, createRecord, displayAvg} from "./lib.js";


const render =(recordData) =>{
  createRecord(recordData);
  displayAvg(recordData);
};
render(data);
document.querySelector("form").addEventListener("submit"), (event) =>{
  event.preventDefault();

  data.push(generateRecord(event.target.element));
  render (data);
});
