import React from "react";

interface Error {
  statusCode: number;
  errorCode: number;
  message: string;
  description: string;
}

interface ErrorsTableProps {
  errors: Error[];
}

const ErrorsTable: React.FC<ErrorsTableProps> = ({ errors }) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className={`dark:text-white text-black w-1/6 px-4 py-2`}>
                Status Code
              </th>
              <th className={`dark:text-white text-black w-1/6 px-4 py-2`}>
                Error Code
              </th>
              <th className={`dark:text-white text-black w-1/6 px-4 py-2`}>
                Error Message
              </th>
              <th
                className={`dark:text-white text-black text-center w-1/6 px-4 py-2`}
              >
                Error Description
              </th>
            </tr>
          </thead>
          <tbody>
            {errors.map((error, index) => (
              <tr key={index} className="border-b">
                <td
                  className={`dark:text-white text-black w-1/6 border px-4 py-2`}
                >
                  {error.statusCode}
                </td>
                <td
                  className={`dark:text-white text-black border w-1/6 px-4 py-2`}
                >
                  {error.errorCode}
                </td>
                <td
                  className={`dark:text-white text-black border w-1/6 px-4 py-2`}
                >
                  {error.message}
                </td>
                <td
                  className={`dark:text-white text-black border w-1/6 px-4 py-2`}
                >
                  {error.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ErrorsTable;
