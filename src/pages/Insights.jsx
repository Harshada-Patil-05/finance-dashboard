import transactions from "../data/transactions";
import Chart from "../components/Chart";

const Insights = () => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const savings = income - expense;

  const categoryTotals = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    });

  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return (
    <div className="p-4 md:p-6 space-y-6">

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold">Insights</h1>

      {/* 🔥 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Total Income</p>
            <span>💰</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-green-600 mt-2">
            ₹{income}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Total Expenses</p>
            <span>📉</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-red-500 mt-2">
            ₹{expense}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Savings</p>
            <span>🏦</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-blue-600 mt-2">
            ₹{savings}
          </p>
        </div>

      </div>

      {/* 🔥 Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* Chart */}
          <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border">
            <h3 className="font-semibold mb-4 text-sm md:text-base">
              Income vs Expenses
            </h3>
            <Chart type="bar" />
          </div>

          {/* Category Breakdown */}
          <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border">
            <h3 className="font-semibold mb-4 text-sm md:text-base">
              Category Breakdown
            </h3>

            <div className="space-y-2">
              {Object.keys(categoryTotals).map((cat) => (
                <div
                  key={cat}
                  className="flex justify-between text-sm md:text-base"
                >
                  <span>{cat}</span>
                  <span>₹{categoryTotals[cat]}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-blue-50 p-5 rounded-2xl shadow-lg border h-fit">
          <h3 className="font-semibold mb-3 text-sm md:text-base">
            💡 Smart Insights
          </h3>

          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            <li>📊 Total spending is ₹{expense}</li>
            <li>💰 You saved ₹{savings} this month</li>
            <li>🍔 Highest expense: {highestCategory}</li>
            <li>⚠️ Try reducing {highestCategory} expenses</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Insights;