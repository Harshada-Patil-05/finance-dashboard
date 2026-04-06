import SummaryCard from "../components/SummaryCard";
import Chart from "../components/Chart";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen animate-fadeIn space-y-6">

      {/* 🔝 Navbar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 
                      bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-lg border">

        {/* Left */}
        <h2 className="text-lg md:text-xl font-semibold">Dashboard</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded-xl w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Right */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          <button className="text-xl hover:scale-110 transition">🔔</button>
          <span className="font-medium text-sm md:text-base">Harshada</span>
        </div>
      </div>

      {/* 💳 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard title="Total Balance" amount={5000} />
        <SummaryCard title="Income" amount={7000} />
        <SummaryCard title="Expenses" amount={2000} />
      </div>

      {/* 📊 Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="font-semibold mb-4">Balance Trend</h3>
          <Chart type="line" />
        </div>

        <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="font-semibold mb-4">Spending Breakdown</h3>
          <Chart type="pie" />
        </div>

      </div>

      {/* 📋 Table */}
      <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="font-semibold mb-4">Recent Transactions</h3>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">12 Apr</td>
                <td>Food</td>
                <td className="text-red-500">-₹500</td>
                <td>Completed</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">10 Apr</td>
                <td>Salary</td>
                <td className="text-green-500">+₹7000</td>
                <td>Completed</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">08 Apr</td>
                <td>Shopping</td>
                <td className="text-red-500">-₹1200</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 💡 Insights */}
      <div className="bg-blue-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          💡 Insights
        </h3>

        <ul className="text-sm text-gray-700 space-y-2">
          <li>📊 Spending increased by 20%</li>
          <li>🍔 Food is highest expense</li>
          <li>💰 Saved ₹2000 this month</li>
          <li>⚠️ Reduce unnecessary expenses</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;