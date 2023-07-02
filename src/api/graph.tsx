import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function Graph(props: any) {
  const populationData = props.populationData;

  if (populationData.length === 0) {
    null;
  } else {
    console.log(props);
  }

  return (
    <>
      <div>
        {populationData.length === 0 ? null : (
          <LineChart
            width={500}
            height={500}
            data={populationData[0].data}
            margin={{
              top: 20,
              right: 20,
              left: 50,
              bottom: 20,
            }}
          >
            <YAxis dataKey="value" />;
            <XAxis dataKey="year" />;
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line
              type="monotone"
              name={populationData[0].prefName}
              dataKey="value"
              stroke="#4682b4"
            />
            <Legend />
            <Tooltip />
          </LineChart>
        )}
      </div>
    </>
  );
}
