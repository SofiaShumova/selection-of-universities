/* eslint-disable no-loop-func */
const singleProps = ['city', 'type']; // with _id
const booleanProps = ['militaryDepartment', 'dormitory']; // boolean
const multipleProps = ['levelOfPreparation', 'formOfEducation'];

export const getFilteredData = (filters, data, req) => {
  let result = [...data];
  result = result.filter((university) => {
    let isApproved = true;

    singleProps.forEach((key) => {
      if (filters[key] && university[key]) {
        if (university[key]._id !== filters[key]._id) {
          isApproved = false;
        }
      }
    });

    booleanProps.forEach((key) => {
      if (filters.hasOwnProperty(key) && filters[key]) {
        if (university.hasOwnProperty(key)) {
          if (university[key] !== filters[key]) {
            isApproved = false;
          }
        } else {
          isApproved = false;
        }
      }
    });

    let requirements = req.filter(
      (item) => item.university._id === university._id
    );

    requirements = checkMultipleProps(filters, requirements);
    if (!requirements) return false;

    return isApproved && checkDisciplines(filters, requirements);
  });

  return result;
};

function checkMultipleProps(filters, requirements) {
  if (
    filters.hasOwnProperty('trainingProgram') &&
    filters.trainingProgram.length
  ) {
    requirements = requirements.filter((r) =>
      filters.trainingProgram.find((item) => r.trainingProgram._id === item._id)
    );
    if (!requirements.length) return false;
  }

  for (let i = 0; i < multipleProps.length; i++) {
    const key = multipleProps[i];
    if (filters.hasOwnProperty(key) && filters[key].length) {
      const res = filters[key].some((item) =>
        requirements.find((r) => r?.[key]?._id === item?._id)
      );

      if (!res) {
        return false;
      }
    }
  }

  if (filters.hasOwnProperty('count') && filters['count']) {
    requirements = requirements.filter((r) => r.numberOfStudents);
    if (!requirements.length) return false;
  }

  return requirements;
}

function checkDisciplines({ disciplines }, req) {
  return true;
  // return req.filter((r)=>r.disciplines disciplines.some());
}
