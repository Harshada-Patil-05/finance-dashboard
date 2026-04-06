const SummaryCard = ({ title, amount }) => {
  // Icon + color based on title
  const getStyles = () => {
    if (title === "Total Balance") {
      return { icon: "💰", color: "text-blue-500" };
    }
    if (title === "Income") {
      return { icon: "📈", color: "text-green-500" };
    }
    if (title === "Expenses") {
      return { icon: "📉", color: "text-red-500" };
    }
  };

  const { icon, color } = getStyles();

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
      
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500">{title}</p>
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Amount */}
      <h2 className="text-2xl font-bold mt-2">₹{amount}</h2>

      {/* Growth */}
      <p className={`text-sm mt-1 ${color}`}>
        +12% from last month
      </p>

    </div>
  );
};

export default SummaryCard;