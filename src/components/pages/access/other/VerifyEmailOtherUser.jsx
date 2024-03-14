import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import {
  devNavUrl,
  getUrlParam,
} from "@/components/helpers/functions-general.jsx";
import PageNotFound from "@/components/partials/PageNotFound.jsx";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import LogoGreen from "@/components/partials/svg/LogoGreen";
import { FaSquareCheck } from "react-icons/fa6";

const VerifyEmailOtherUser = () => {
  const key = getUrlParam().get("key");

  const {
    data: changeEmail,
    isLoading,
    error,
  } = useQueryData(
    `/v2/user-other/verify-email/${key}`,
    "get", // method
    "change-email" // key
  );

  return (
    <>
      {changeEmail?.count === 0 ||
      key === null ||
      key === "" ||
      error ||
      !changeEmail?.success ? (
        <>
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <PageNotFound />
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <div className="h-screen w-full relative">
            <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8  rounded-md shadow-sm absolute top-28 left-[50%] translate-x-[-50%] bg-primary">
              <div className=" mb-4">
                <div className="flex justify-center">
                  <LogoGreen />
                </div>
                <FaSquareCheck className="text-5xl fill-accent mx-auto mt-10 mb-2" />
                <h2 className="mb-4 mt-2 text-lg text-center">Success!</h2>
                <p className="text-sm mb-6">
                  Your email has been successfully changed! You can now login
                  using your new email.
                </p>

                <a
                  className="btn btn--accent text-xs block text-center mt-6"
                  href={`${devNavUrl}/login`}
                >
                  Back to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyEmailOtherUser;
