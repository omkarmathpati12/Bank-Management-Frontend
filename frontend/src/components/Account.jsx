import axios from "axios";
import { useState } from "react";

function Account() {

  const [account, setAccount] = useState({
    type: "",
    balance: "",
    branchName: "",
    ifsc: "",
    customerId: ""
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const request = {
    type: account.type,
    balance: Number(account.balance),
    branchName: account.branchName,
    ifsc: account.ifsc,
    customerId: Number(account.customerId)
  };

  console.log("Sending data:", request);

  try {
    await axios.post(
      "http://localhost:8080/accounts/create",
      request
    );

    alert("Account created successfully");

    setAccount({
      type: "",
      balance: "",
      branchName: "",
      ifsc: "",
      customerId: ""
    });

  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Failed to create account");
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Account Type
            </label>

            <select
              name="type"
              value={account.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="SAVINGS">Savings</option>
              <option value="CURRENT">Current</option>
            </select>
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Balance
            </label>

            <input
              type="number"
              name="balance"
              value={account.balance}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter balance"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Branch Name
            </label>

            <input
              type="text"
              name="branchName"
              value={account.branchName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter branch name"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-1">
              IFSC
            </label>

            <input
              type="text"
              name="ifsc"
              value={account.ifsc}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter IFSC code"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Customer ID
            </label>

            <input
              type="number"
              name="customerId"
              value={account.customerId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter customer ID"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  );
}

export default Account;