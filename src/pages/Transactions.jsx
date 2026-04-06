import { useState } from "react";
import transactionsData from "../data/transactions";

const Transactions = ({ role }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredData = transactionsData.filter((t) => {
    return (
      (filter === "all" || t.type === filter) &&
      t.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-4 md:p-6 space-y-6">

      {/* 🔥 Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        
        <h1 className="text-xl md:text-2xl font-bold">Transactions</h1>

        {role === "admin" && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 hover:scale-105 transition w-full md:w-auto">
            + Add Transaction
          </button>
        )}
      </div>

      {/* 🔍 Filters */}
      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search category..."
          className="border px-4 py-2 rounded-xl w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-xl w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      </div>

      {/* 📊 Table */}
      <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border">

        {/* 🔥 IMPORTANT: Responsive table wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">

            <thead>
              <tr className="border-b text-gray-500 text-sm">
                <th className="p-3">Date</th>
                <th className="p-3">Category</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Type</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 text-sm md:text-base">{t.date}</td>

                    <td className="p-3 font-medium text-sm md:text-base">
                      {t.category}
                    </td>

                    <td
                      className={`p-3 font-semibold text-sm md:text-base ${
                        t.type === "income"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {t.type === "income" ? "+ " : "- "}₹{t.amount}
                    </td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                          t.type === "income"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
};

export default Transactions;