import axios from "axios";
import { useState } from "react";

function Customer() {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phoneNumber: "",
    address: "",
    aadharCard: "",
    panCard: "",
    image:""
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/customer/create", customer);

      alert("Customer Saved Successfully");

      setCustomer({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phoneNumber: "",
        address: "",
        aadharCard: "",
        panCard: "",
        image:""
      });
    } catch (error) {
      console.log(error);
      alert("Failed to save customer");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Customer Registration
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={customer.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={customer.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={customer.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              name="gender"
              value={customer.gender}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={customer.phoneNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={customer.address}
              onChange={handleChange}
              rows="3"
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Aadhar Card</label>
            <input
              type="text"
              name="aadharCard"
              value={customer.aadharCard}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">PAN Card</label>
            <input
              type="text"
              name="panCard"
              value={customer.panCard}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Customer;