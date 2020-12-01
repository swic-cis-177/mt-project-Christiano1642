import{generateRecord, createRecord, displayAvg} from "./index.js";


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
