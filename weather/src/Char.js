import React from "react";
import "./char.css";
import { useHistory } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function Char({ data }) {
  const history = useHistory();
  return (
    <div className="char">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          className="data"
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" />
          <YAxis dataKey="main.temp" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="main.temp"
            name="temp"
            stroke="#ffffff"
            fill="#03dac5"
          />
        </AreaChart>
      </ResponsiveContainer>

      <button className="chatButton" onClick={() => history.goBack()}>
        Go Back
      </button>
    </div>
  );
}
