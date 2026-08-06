import {
    FaMobileAlt,
    FaMoneyCheckAlt,
    FaShieldAlt,
    FaUniversity,
    FaUserFriends,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Hero from "../assets/Hero.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const features = [
    {
      icon: <FaUniversity size={32} />,
      title: "Account Management",
      desc: "Manage your bank accounts easily.",
    },
    {
      icon: <FaMoneyCheckAlt size={32} />,
      title: "Money Transfer",
      desc: "Transfer funds instantly and securely.",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Secure Banking",
      desc: "Advanced encryption for your protection.",
    },
    {
      icon: <FaMobileAlt size={32} />,
      title: "Mobile Banking",
      desc: "Access your account anywhere.",
    },
  ];

  const services = [
    "Savings Account",
    "Current Account",
    "Personal Loan",
    "Fixed Deposit",
    "Internet Banking",
    "Credit Card",
  ];

  const navigate=useNavigate();

  return (
    <>
    <Navbar/>
      {/* Hero */}
<section className="bg-blue-50 pt-24 pb-20">
  <div className="w-full px-6">
    <div className="grid lg:grid-cols-2 items-center gap-12">

      {/* Left Content */}
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Smart Banking
          <span className="block text-blue-600">
            For Everyone
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Manage your accounts, transfer money securely, view transactions,
          and access banking services anytime, anywhere.
        </p>

        <div className="mt-8 flex gap-4">
          <button onClick={()=> navigate('/customer')} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Open Account
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src={Hero}
          alt="Bank Management"
          className="w-full max-w-md"
        />
      </div>

    </div>
  </div>
</section>

      {/* Features */}

      <section className="py-20 bg-white">

        <div className="w-full px-8 md:px-16 lg:px-24">

          <h2 className="text-4xl font-bold text-center mb-14">
            Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-2xl p-8 hover:shadow-xl transition"
              >
                <div className="text-blue-700 mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="bg-blue-700 text-white py-20">

        <div className="grid md:grid-cols-4 text-center gap-10 px-8 md:px-16 lg:px-24">

          <div>
            <FaUserFriends className="mx-auto text-5xl mb-4" />
            <h2 className="text-4xl font-bold">10K+</h2>
            <p>Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">₹100Cr+</h2>
            <p>Transactions</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">250+</h2>
            <p>Branches</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">99.99%</h2>
            <p>Security</p>
          </div>

        </div>

      </section>

      {/* Services */}

      <section className="py-20">

        <div className="px-8 md:px-16 lg:px-24">

          <h2 className="text-4xl font-bold text-center mb-14">
            Banking Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-8 text-center hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-semibold">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer/>

    </>
  );
}