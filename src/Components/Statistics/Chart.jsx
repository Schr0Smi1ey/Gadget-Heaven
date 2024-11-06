import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { CartContext } from "../../Contexts/CartContext";
const Chart = () => {
  const { cartItemList } = useContext(CartContext);
  const chartData = cartItemList.map((item) => ({
    product_title: item.product_title,
    price: item.price,
  }));
  console.log(chartData);
  return (
    <div className="mx-auto border-2 border-gray-300 rounded-lg flex justify-center mt-10">
      <BarChart
        height={500}
        width={500}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product_title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" stackId="a" fill="#9538E2" />
      </BarChart>
    </div>
  );
};

export default Chart;
