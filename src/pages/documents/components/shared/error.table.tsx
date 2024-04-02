import React from "react";
import useDarkMode from "use-dark-mode";

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
  const { value: isDark } = useDarkMode();

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th
                style={{ color: isDark ? "white" : "black" }}
                className={`w-1/6 px-4 py-2`}
              >
                Status Code
              </th>
              <th
                style={{ color: isDark ? "white" : "black" }}
                className={`w-1/6 px-4 py-2`}
              >
                Error Code
              </th>
              <th
                style={{ color: isDark ? "white" : "black" }}
                className="px-4 py-2"
              >
                Error Message
              </th>
              <th
                style={{ color: isDark ? "white" : "black" }}
                className="text-center px-4 py-2"
              >
                Error Description
              </th>
            </tr>
          </thead>
          <tbody>
            {errors.map((error, index) => (
              <tr key={index} className="border-b">
                <td
                  style={{ color: isDark ? "white" : "black" }}
                  className="border px-4 py-2"
                >
                  {error.statusCode}
                </td>
                <td
                  style={{ color: isDark ? "white" : "black" }}
                  className="border px-4 py-2"
                >
                  {error.errorCode}
                </td>
                <td
                  style={{ color: isDark ? "white" : "black" }}
                  className="border px-4 py-2"
                >
                  {error.message}
                </td>
                <td
                  style={{ color: isDark ? "white" : "black" }}
                  className="border px-4 py-2"
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
