import {
  fathersId,
  formatDate,
  mothersId,
} from "@/components/helpers/functions-general";
import Pills from "@/components/partials/Pills";
import { setIsSearch } from "@/components/store/StoreAction";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      label = "For Assessment";
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
  gradeLevelData,
  guardian,
  isShowStatus,
  isShowLrn,
  isShowStudentName,
  isShowDob,
  isShowStudentEmail,
  isShowFatherName,
  isShowFatherContact,
  isShowFatherEmail,
  isShowFatherDob,
  isShowMotherMaiden,
  isShowMotherContact,
  isShowMotherEmail,
  isShowMotherDob,
  isShowGender,
  isShowGradeLevel,
  isShowSy,
  isShowAddress
) => {
  const getParentsInfo = () => {
    let fatherName = "";
    let fatherContact = "";
    let fatherEmail = "";
    let fatherDob = "";
    let motherName = "";
    let motherContact = "";
    let motherEmail = "";
    let motherDob = "";
    let address = "";

    guardian?.count > 0 &&
      guardian?.data.map((guardianItem) => {
        if (
          Number(guardianItem.guardian_parent_id) ===
            Number(item.students_parent_id) &&
          guardianItem.guardian_relationship_id === fathersId
        ) {
          fatherName = `${guardianItem.guardian_fname} ${guardianItem.guardian_lname}`;
          fatherContact = guardianItem.guardian_mobile;
          fatherEmail = guardianItem.guardian_email;
          fatherDob = guardianItem.guardian_birth_date;
          address = `${guardianItem.guardian_address} ${guardianItem.guardian_province} ${guardianItem.guardian_city} ${guardianItem.guardian_zipcode} ${guardianItem.guardian_country}`;
        }

        if (
          Number(guardianItem.guardian_parent_id) ===
            Number(item.students_parent_id) &&
          guardianItem.guardian_relationship_id === mothersId
        ) {
          motherName = `${guardianItem.guardian_fname} ${guardianItem.guardian_maiden_name}`;
          // motherName = `${guardianItem.guardian_fname} ${guardianItem.guardian_maiden_name} ${guardianItem.guardian_mname}`;
          motherContact = guardianItem.guardian_mobile;
          motherEmail = guardianItem.guardian_email;
          motherDob = guardianItem.guardian_birth_date;
          address = `${guardianItem.guardian_address} ${guardianItem.guardian_province} ${guardianItem.guardian_city} ${guardianItem.guardian_zipcode} ${guardianItem.guardian_country}`;
        }
      });

    return {
      fatherName,
      fatherContact,
      fatherEmail,
      fatherDob,
      motherName,
      motherContact,
      motherEmail,
      motherDob,
      address,
    };
  };

  return (
    <tr key={key}>
      <td>{counter++}.</td>
      {isShowStatus && (
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
      )}
      {isShowLrn && <td>{item.students_lrn}</td>}
      {isShowStudentName && <td>{item.student_fullname}</td>}
      {isShowDob && <td>{formatDate(item.students_birth_date)}</td>}
      {isShowStudentEmail && <td>{item.students_email}</td>}
      {isShowFatherName && <td>{getParentsInfo().fatherName}</td>}
      {isShowFatherContact && <td>{getParentsInfo().fatherContact}</td>}
      {isShowFatherEmail && <td>{getParentsInfo().fatherEmail}</td>}
      {isShowFatherDob && (
        <td>
          {getParentsInfo().fatherDob === "" ||
          isNaN(getParentsInfo().fatherDob)
            ? ""
            : formatDate(getParentsInfo().fatherDob)}
        </td>
      )}
      {isShowMotherMaiden && <td>{getParentsInfo().motherName}</td>}
      {isShowMotherContact && <td>{getParentsInfo().motherContact}</td>}
      {isShowMotherEmail && <td>{getParentsInfo().motherEmail}</td>}
      {isShowMotherDob && (
        <td>
          {getParentsInfo().motherDob === "" ||
          isNaN(getParentsInfo().motherDob)
            ? ""
            : formatDate(getParentsInfo().motherDob)}
        </td>
      )}
      {isShowGender && (
        <td>{item.students_gender === "m" ? "Male" : "Female"}</td>
      )}
      {isShowGradeLevel && <td>{item.grade_level_name}</td>}
      {isShowSy && <td>{item.school_year}</td>}
      {isShowAddress && <td>{getParentsInfo().address}</td>}
      <td>
        <div className="table-action flex gap-2 justify-end">
          <Link
            // to={`${devNavUrl}/${link}/clients/students?cid=${item.parents_aid}`}
            className="tooltip text-base invisible"
            // data-tooltip="Student"
            onClick={() => dispatch(setIsSearch(false))}
          >
            {/* <PiStudentLight className="text-[20px]" /> */}
          </Link>
        </div>
      </td>
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
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
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
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
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
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
    ) {
      count++;
    }

    // if birthdate only
    if (
      gender === "" &&
      (gradeLevel.id === 0 || gradeLevel.id === undefined) &&
      withLrn === 0 &&
      birthDate !== "" &&
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
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
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
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
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
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
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
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
      Number(item.students_birth_date.split("-")[1]) === Number(birthDate)
    ) {
      count++;
    }
  });

  return count;
};

export const checkBoxColumn = (
  isShowStatus,
  setIsShowStatus,
  isShowLrn,
  setIsShowLrn,
  isShowStudentName,
  setIsShowStudentName,
  isShowDob,
  setIsShowDob,
  isShowStudentEmail,
  setIsShowStudentEmail,
  isShowFatherName,
  setIsShowFatherName,
  isShowFatherContact,
  setIsShowFatherContact,
  isShowFatherEmail,
  setIsShowFatherEmail,
  isShowFatherDob,
  setIsShowFatherDob,
  isShowMotherMaiden,
  setIsShowMotherMaiden,
  isShowMotherContact,
  setIsShowMotherContact,
  isShowMotherEmail,
  setIsShowMotherEmail,
  isShowMotherDob,
  setIsShowMotherDob,
  isShowGender,
  setIsShowGender,
  isShowGradeLevel,
  setIsShowGradeLevel,
  isShowSy,
  setIsShowSy,
  isShowAddress,
  setIsShowAddress,
  setIsShowFilterColumn,
  isShowFilterColumn
) => {
  const handleReset = () => {
    setIsShowStatus(true);
    setIsShowLrn(true);
    setIsShowStudentName(true);
    setIsShowDob(true);
    setIsShowStudentEmail(true);
    setIsShowFatherName(true);
    setIsShowFatherContact(true);
    setIsShowFatherEmail(true);
    setIsShowFatherDob(true);
    setIsShowMotherMaiden(true);
    setIsShowMotherContact(true);
    setIsShowMotherEmail(true);
    setIsShowMotherDob(true);
    setIsShowGender(true);
    setIsShowGradeLevel(true);
    setIsShowSy(true);
    setIsShowAddress(true);
  };
  return (
    <div className="flex flex-col">
      <span
        className={`font-bold text-xs mb-2 mt-5 uppercase flex items-center gap-2 w-fit cursor-pointer hover:text-accentLight ${
          isShowFilterColumn && "text-accentLight"
        }`}
      >
        <span
          className={`hover:underline ${
            isShowFilterColumn && "underline text-accentLight"
          }`}
          onClick={() => setIsShowFilterColumn(!isShowFilterColumn)}
        >
          Filter columns
        </span>
        {/* {isShowFilterColumn ? (
          <FaCaretUp className="h-5 w-5" />
        ) : (
          <FaCaretDown className="h-5 w-5" />
        )} */}
        {isShowFilterColumn ? (
          <button onClick={() => setIsShowFilterColumn(!isShowFilterColumn)}>
            <FaCaretUp className="h-4 w-4" />
          </button>
        ) : (
          <button onClick={() => setIsShowFilterColumn(!isShowFilterColumn)}>
            <FaCaretDown className="h-4 w-4" />
          </button>
        )}
      </span>

      {isShowFilterColumn && (
        <div className="text-xs flex items-center flex-wrap gap-2 mb-10">
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowStatus(!isShowStatus)}
          >
            <input type="checkbox" className="h-3 w-3" checked={isShowStatus} />{" "}
            Status
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowLrn(!isShowLrn)}
          >
            <input type="checkbox" className="h-3 w-3" checked={isShowLrn} />
            LRN
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowStudentName(!isShowStudentName)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowStudentName}
            />
            Student Name
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowDob(!isShowDob)}
          >
            <input type="checkbox" className="h-3 w-3" checked={isShowDob} />
            Date of Birth
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowStudentEmail(!isShowStudentEmail)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowStudentEmail}
            />
            Student Email
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowFatherName(!isShowFatherName)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowFatherName}
            />
            Father's Name
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowFatherContact(!isShowFatherContact)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowFatherContact}
            />
            Contact Number
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowFatherEmail(!isShowFatherEmail)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowFatherEmail}
            />
            Father's Email
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowFatherDob(!isShowFatherDob)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowFatherDob}
            />
            Father's Date of Birth
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowMotherMaiden(!isShowMotherMaiden)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowMotherMaiden}
            />
            Mother's Maiden Name
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowMotherContact(!isShowMotherContact)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowMotherContact}
            />
            Contact Number
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowMotherEmail(!isShowMotherEmail)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowMotherEmail}
            />
            Mother's Email
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowMotherDob(!isShowMotherDob)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowMotherDob}
            />
            Mother's Date of Birth
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowGender(!isShowGender)}
          >
            <input type="checkbox" className="h-3 w-3" checked={isShowGender} />
            Gender
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowGradeLevel(!isShowGradeLevel)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowGradeLevel}
            />
            Grade Level
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowSy(!isShowSy)}
          >
            <input type="checkbox" className="h-3 w-3" checked={isShowSy} />
            S.Y
          </span>
          <span
            className="flex items-center gap-1 cursor-pointer hover:text-accentDark hover:underline"
            onClick={() => setIsShowAddress(!isShowAddress)}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={isShowAddress}
            />
            Address
          </span>

          <span
            className="cursor-pointer hover:underline text-alert"
            onClick={() => handleReset()}
          >
            Reset
          </span>
        </div>
      )}
    </div>
  );
};
