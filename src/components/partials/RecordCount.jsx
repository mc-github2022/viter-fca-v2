import React from "react";

const RecordCount = () => {
  return (
    <>
      <div className="py-1 flex justify-between">
        <div className="flex gap-2">
          <ul className="flex gap-2 text-xs relative after:content-['|'] top-0 right-0 opacity-70">
            <li>Record:</li>
            <li>2</li>
          </ul>

          <ul className="flex gap-2 text-xs relative after:content-['|'] top-0 right-0 opacity-70">
            <li>Active:</li>
            <li>3</li>
          </ul>

          <ul className="flex gap-2 text-xs opacity-70">
            <li>Inactive:</li>
            <li>4</li>
          </ul>

          <ul className="flex gap-2 text-xs opacity-70">
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecordCount;
