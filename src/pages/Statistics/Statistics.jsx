import { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { MyContext } from "../../Layout/Layout";
import { getStoredData } from "../../components/Local/LocalStorage";

const COLORS = ["#C50DFA", "#210B7C"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const donations = useContext(MyContext);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const stored = getStoredData();
    const storedItem = (stored.length / donations.length) * 100;
    setPercent(storedItem);
  }, [donations.length]);

  const data = [
    { name: "Total Donation", value: 100 },
    { name: "Your Donation", value: percent },
  ];

  return (
    <div
      className="flex
     items-center justify-center "
    >
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Legend />
      </PieChart>
    </div>
  );
};
export default Statistics;
