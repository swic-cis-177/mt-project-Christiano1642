const p = document.querySelector("p");
const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

const avgBench = document.querySelector("#avgBench");
const avgSquat = document.querySelector("#avgSquat");
const avgDeadift = document.querySelector("#avgDeadift");

const calcAvg = (recordData) =>
  recordData.reduce((total, num) => {
    let ret = total;
    ret += num;
    return ret;
  }, 0) / recordData.length;

const generateRandomId = () =>
  Math.floor(Math.random() * (2000000 - 1000000 + 1) + 1000000);

const processForm = (elements) =>
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (formInfo, { id, value }) => ({
        ...formInfo,

        [id]: value,
      }),

      {}
    );

export const createRecordTable = (recordData) => {
  tbody.innerHTML = null;
  recordData.forEach(({ name, age, benchpress, squat, deadlift, id }) => {
    const newStudentRow = template.content.cloneNode(true);
    const newStudentTDs = newStudentRow.querySelectorAll("td");

    newStudentTDs[0].textContent = id;
    newStudentTDs[1].textContent = name;
    newStudentTDs[2].textContent = age;
    newStudentTDs[3].textContent = benchpress;
    newStudentTDs[4].textContent = squat;
    newStudentTDs[5].textContent = deadlift;
    tbody.appendChild(newStudentRow);
  });
};

export const displayAvg = (recordData) => {
  p.innerText = calcAvg(recordData);
};

export const generateRecord = (elements) => ({
  id: generateRandomId(),
  ...processForm(elements),
});
