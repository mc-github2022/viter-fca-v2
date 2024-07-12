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
      Number(item.current_students_grade_level_id)
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
      item.current_students_last_coc_is_agree === 1 &&
      item.current_students_last_parent_declaration_is_agree === 1 &&
      item.current_students_last_parent_consent_is_agree === 1 &&
      item.current_students_last_parent_commitment_is_agree === 1
    ) {
      label = "For Assessment";
      color = "text-[#f09a02]";
    }

    if (
      item.students_is_active === 1 &&
      item.school_year ===
        `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}` &&
      item.current_students_last_coc_is_agree === 1 &&
      item.current_students_last_parent_declaration_is_agree === 1 &&
      item.current_students_last_parent_consent_is_agree === 1 &&
      item.current_students_last_parent_commitment_is_agree === 1 &&
      item.current_students_is_accept_payment === 1
    ) {
      label = "Temporary Enrolled";
      color = "text-[#1c84b9]";
    }

    if (
      item.students_is_active === 1 &&
      item.school_year ===
        `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}` &&
      item.current_students_last_coc_is_agree === 1 &&
      item.current_students_last_parent_declaration_is_agree === 1 &&
      item.current_students_last_parent_consent_is_agree === 1 &&
      item.current_students_last_parent_commitment_is_agree === 1 &&
      item.current_students_is_accept_payment === 1 &&
      isCompleteRequirement?.length > 0
    ) {
      label = "Enrolled";
      color = "text-[#137333]";
    }

    if (item.current_students_grade_level_id === 0) {
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

export const getRequirementsStatus = (
  item,
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
      Number(item.current_students_grade_level_id)
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

  if (isCompleteRequirement?.length > 0) {
    label = "Completed";
    color = "text-[#34a853]";
  }

  return <Pills label={label} color={color} />;
};

export const getSchoolYearByStudentId = (schoolYear, id) => {
  let list = "";

  if (schoolYear?.count > 0) {
    const result = schoolYear?.data.filter(
      (item) => item.school_year_aid === Number(id)
    );
    list = result?.length > 0 ? result[0]?.school_year : "Unenrolled";
  }

  return list;
};

export const getGradeLevelByStudentId = (gardeLevel, id) => {
  let list = "";

  if (gardeLevel?.count > 0) {
    const result = gardeLevel?.data.filter(
      (item) => item.grade_level_aid === Number(id)
    );
    list = result?.length > 0 ? result[0]?.grade_level_name : "Unspecified";
  }

  return list;
};

export const getGradeLevelOrderByStudentId = (gardeLevel, id) => {
  let list = "";

  if (gardeLevel?.count > 0) {
    const result = gardeLevel?.data.filter(
      (item) => item.grade_level_aid === Number(id)
    );
    list = result?.length > 0 ? result[0]?.grade_level_order : "";
  }

  return list;
};
