import Pills from "@/components/partials/Pills";

export const getStudentStatus = (
  item,
  getCurrentSchoolYear,
  studentRequirement,
  registrarRequirement
) => {
  let label = "INC";
  let color = "text-[#ea4335]";

  let isCompleteRequirement = studentRequirement?.data.filter(
    (reqItem) =>
      Number(item.students_aid) ===
        Number(reqItem.students_requirements_student_id) &&
      Number(reqItem.total_requirements) === registrarRequirement?.count
  );

  if (item.students_is_active === 1) {
    label = "Active";
    color = "text-green-500";
  }

  if (getCurrentSchoolYear !== undefined) {
    if (
      item.students_is_active === 1 &&
      item.school_year ===
        `${getCurrentSchoolYear.start_year}-${getCurrentSchoolYear.end_year}`
    ) {
      label = "Ongoing";
      color = "text-[#f09d00]";
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
      label = "For Assestment";
      color = "text-[#1b6ef3]";
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
      color = "text-[#1b6ef3]";
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
      color = "text-[#34a853]";
    }
  }

  return <Pills label={label} color={color} />;
};

export const getRequirementsStatus = (
  item,
  studentRequirement,
  registrarRequirement
) => {
  let label = "INC";
  let color = "text-[#ea4335]";

  let isCompleteRequirement = studentRequirement?.data.filter(
    (reqItem) =>
      Number(item.students_aid) ===
        Number(reqItem.students_requirements_student_id) &&
      Number(reqItem.total_requirements) === registrarRequirement?.count
  );

  if (isCompleteRequirement?.length > 0) {
    label = "Completed";
    color = "text-[#34a853]";
  }

  return <Pills label={label} color={color} />;
};
