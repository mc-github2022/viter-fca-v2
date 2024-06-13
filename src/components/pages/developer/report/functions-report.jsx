import Pills from "@/components/partials/Pills";

export const getStudentStatus = (
  item,
  getCurrentSchoolYear,
  studentRequirement,
  registrarRequirement,
  gradeLevel
) => {
  let label = "Incomplete";
  let color = "text-[#ea4335]";
  let isCompleteRequirement = 0;

  const getGradeLevel = gradeLevel?.data.filter(
    (levelItem) =>
      Number(levelItem.grade_level_aid) ===
      Number(item.school_year_students_grade_level_id)
  );

  const getPreSchoolRequirement = registrarRequirement?.data.filter(
    (levelItem) =>
      Number(levelItem.requirement_registrar_is_for_pre_school) === 1
  );

  if (
    getGradeLevel?.length > 0 &&
    getGradeLevel[0]?.grade_level_is_pre_school === 1
  ) {
    isCompleteRequirement = studentRequirement?.data.filter(
      (reqItem) =>
        Number(item.students_aid) ===
          Number(reqItem.students_requirements_student_id) &&
        Number(reqItem.total_requirements) === getPreSchoolRequirement?.length
    );
  } else {
    isCompleteRequirement = studentRequirement?.data.filter(
      (reqItem) =>
        Number(item.students_aid) ===
          Number(reqItem.students_requirements_student_id) &&
        Number(reqItem.total_requirements) === registrarRequirement?.count
    );
  }

  if (item.students_is_active === 1) {
    label = "Active";
    color = "text-[#137333]";
  }

  if (getCurrentSchoolYear !== undefined) {
    if (
      item.students_is_active === 1 &&
      item.school_year ===
        `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}`
    ) {
      label = "Ongoing";
      color = "text-[#f09a02]";
    }

    if (
      item.students_is_active === 1 &&
      item.school_year ===
        `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}` &&
      item.school_year_students_last_coc_is_agree === 1 &&
      item.school_year_students_last_parent_declaration_is_agree === 1 &&
      item.school_year_students_last_parent_consent_is_agree === 1 &&
      item.school_year_students_last_parent_commitment_is_agree === 1
    ) {
      label = "For Assestment";
      color = "text-[#f09a02]";
    }

    if (
      item.students_is_active === 1 &&
      item.school_year ===
        `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}` &&
      item.school_year_students_last_coc_is_agree === 1 &&
      item.school_year_students_last_parent_declaration_is_agree === 1 &&
      item.school_year_students_last_parent_consent_is_agree === 1 &&
      item.school_year_students_last_parent_commitment_is_agree === 1 &&
      item.school_year_students_is_accept_payment === 1
    ) {
      label = "Temporary Enrolled";
      color = "text-[#1c84b9]";
    }

    if (
      item.students_is_active === 1 &&
      item.school_year ===
        `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}` &&
      item.school_year_students_last_coc_is_agree === 1 &&
      item.school_year_students_last_parent_declaration_is_agree === 1 &&
      item.school_year_students_last_parent_consent_is_agree === 1 &&
      item.school_year_students_last_parent_commitment_is_agree === 1 &&
      item.school_year_students_is_accept_payment === 1 &&
      isCompleteRequirement?.length > 0
    ) {
      label = "Enrolled";
      color = "text-[#137333]";
    }

    if (item.school_year_students_grade_level_id === 0) {
      label = "Active";
      color = "text-[#137333]";
    }

    // console.log(item);

    // console.log(item.school_year);
    // console.log(
    //   `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}`
    // );
    // console.log(item.students_is_active === 1);
  }

  return <Pills label={label} color={color} />;
};

export const getRecord = (
  counter,
  item,
  key,
  getCurrentSchoolYear,
  studentRequirement,
  registrarRequirement,
  gradeLevelData
) => {
  return (
    <tr key={key}>
      <td>{counter++}.</td>
      <td>
        {item.students_is_active === 0 ? (
          <Pills label="Inactive" color="text-disable" />
        ) : (
          getStudentStatus(
            item,
            getCurrentSchoolYear,
            studentRequirement,
            registrarRequirement,
            gradeLevelData
          )
        )}
      </td>
      <td>{item.student_fullname}</td>
      <td>{item.grade_level_name}</td>
      <td>{item.school_year}</td>
    </tr>
  );
};

export const getCount = (result, gender, gradeLevel, withLrn, birthDate) => {
  let count = 0;

  result?.pages[0].data.map((item) => {
    // if all student of SY
    if (
      gender === "" &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn === 0 &&
      birthDate === ""
    ) {
      count++;
    }
    // if gender only
    if (
      gender !== "" &&
      item.students_gender === gender &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn === 0 &&
      birthDate === ""
    ) {
      count++;
    }
    // if gender and level
    if (
      gender !== "" &&
      item.students_gender === gender &&
      (gradeLevel.id !== 0 || gradeLevel.id !== undefined) &&
      item.grade_level_aid === gradeLevel.id &&
      withLrn === 0 &&
      birthDate === ""
    ) {
      count++;
    }

    // if gender, level and with LRN
    if (
      gender !== "" &&
      item.students_gender === gender &&
      (gradeLevel.id !== 0 || gradeLevel.id !== undefined) &&
      item.grade_level_aid === gradeLevel.id &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate === ""
    ) {
      count++;
    }

    // if gender, level, with LRN, and birthdate
    if (
      gender !== "" &&
      item.students_gender === gender &&
      (gradeLevel.id !== 0 || gradeLevel.id !== undefined) &&
      item.grade_level_aid === gradeLevel.id &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }

    // if level only
    if (
      gender === "" &&
      (gradeLevel.id !== 0 || gradeLevel.id !== undefined) &&
      item.grade_level_aid === gradeLevel.id &&
      withLrn === 0 &&
      birthDate === ""
    ) {
      count++;
    }

    // if level and with LRN
    if (
      gender === "" &&
      (gradeLevel.id !== 0 || gradeLevel.id !== undefined) &&
      item.grade_level_aid === gradeLevel.id &&
      withLrn === 0 &&
      item.students_lrn !== "" &&
      birthDate === ""
    ) {
      count++;
    }

    // if level, with LRN and birthdate
    if (
      gender === "" &&
      (gradeLevel.id !== 0 || gradeLevel.id !== undefined) &&
      item.grade_level_aid === gradeLevel.id &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }

    // if with LRN only
    if (
      gender === "" &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate === ""
    ) {
      count++;
    }

    // if with LRN and birthdate
    if (
      gender === "" &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }

    // if birthdate only
    if (
      gender === "" &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn === 0 &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }

    // if gender and with LRN
    if (
      gender !== "" &&
      item.students_gender === gender &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate === ""
    ) {
      count++;
    }

    // if gender, with LRN, and birthdate
    if (
      gender !== "" &&
      item.students_gender === gender &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }

    // if gender and birthdate
    if (
      gender !== "" &&
      item.students_gender === gender &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn === 0 &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }

    // if level and birthdate
    if (
      gender === "" &&
      (gradeLevel.id !== 0 || gradeLevel.id !== undefined) &&
      item.grade_level_aid === gradeLevel.id &&
      withLrn === 0 &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }

    // if with LRN only
    if (
      gender === "" &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate === ""
    ) {
      count++;
    }

    // if with LRN and birthdate
    if (
      gender === "" &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn !== 0 &&
      item.students_lrn !== "" &&
      birthDate !== "" &&
      `${item.students_birth_date.split("-")[0]}-${
        item.students_birth_date.split("-")[1]
      }` === birthDate
    ) {
      count++;
    }
  });

  return count;
};
