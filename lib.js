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

/**
 * Extract the values of a specific exercise, making sure that they are numbers
 * @param {string} exerciseName
 * @returns {[Number]}
 */
const extractNumericalValues = (dataSet, prop) =>
  dataSet.map((data) => Number(data[prop]));

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
  // Filter out the records for each type
  const benchValues = extractNumericalValues(recordData, "benchpress");

  console.log(benchValues, "hi");
  avgBench.innerText = calcAvg(benchValues);
};

export const generateRecord = (elements) => ({
  id: generateRandomId(),
  ...processForm(elements),
});
