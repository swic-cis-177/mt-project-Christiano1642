const p = document.querySelector("p");
const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

const calcAvg = (recordData) =>
  recordData.reduce(
    (total, { benchpress }) => {
      let ret = total;
      ret += Number(benchpress);
      return ret;
    },
    (
      total,

      { squat }
    ) => {
      let ret = total;
      ret += Number(squat);
      return ret;
    },
    (
      total,

      { deadlift }
    ) => {
      let ret = total;
      ret += Number(deadlift);
      return ret;
    },

    0
  ) / recordData.length;

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
    newStudentRow[3].textContent = benchpress;
    newStudentRow[4].textContent = squat;
    newStudentRow[5].textContent = deadlift;
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
