const p = document.querySelector("p");
const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

const avgBench = document.querySelector("#avgBench");
const avgSquat = document.querySelector("#avgSquat");
const avgDeadLift = document.querySelector("#avgDeadLift");

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
    const newLifterRow = template.content.cloneNode(true);
    const newLifterTDs = newLifterRow.querySelectorAll("td");

    newLifterTDs[0].textContent = id;
    newLifterTDs[1].textContent = name;
    newLifterTDs[2].textContent = age;
    newLifterTDs[3].textContent = benchpress;
    newLifterTDs[4].textContent = squat;
    newLifterTDs[5].textContent = deadlift;
    tbody.appendChild(newLifterRow);
  });
};

export const displayAvg = (recordData) => {
  // Filter out the records for each type
  const benchValues = extractNumericalValues(recordData, "benchpress");
  const squatValues = extractNumericalValues(recordData, "squat")
  const deadliftValues = extractNumericalValues(recordData, "deadlift")
  console.log(squatValues,"hi");
  console.log(deadliftValues,"hi");
  console.log(benchValues, "hi");
  avgBench.innerText = calcAvg(benchValues);
  avgSquat.innerText = calcAvg(squatValues);
  avgDeadLift.innerText = calcAvg (deadliftValues);

};

export const generateRecord = (elements) => ({
  id: generateRandomId(),
  ...processForm(elements),
});
