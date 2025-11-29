import React from "react";
import {
  LatestDataComponent,
  initAnedyaClient,
  ChartWidget,
  LatestDataGauge,
} from "yt-tutorial-app";

function App() {
  const nodeId = "";
  const tokenId = "";
  const token = "";
  const client = initAnedyaClient(tokenId, token);

  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <h1>Test Widget SDK</h1>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <ChartWidget
            client={client}
            nodeId={nodeId}
            variable="humidity"
            from={1732420983000}
            to={1763956983000}
            limit={40}
            title="Humidity Trend"
            styles={({ data, loading, error }) => ({
              container: {
                background: loading
                  ? "rgb(248, 249, 250)"
                  : error
                  ? "rgb(248, 249, 250)"
                  : "rgb(248, 249, 250)",
                borderRadius: 6,
                border: "1px solid rgba(211, 216, 220, 1)",
              },
              title: { color: "#000000", fontSize: "18px" },
              chart: {
                strokeColor: "rgba(0, 143, 251, 0.85)",
                strokeWidth: 3,
                gradientColors: ["rgba(0, 143, 251, 0.85)", "#ffe0b2"],
              },
              tooltip: {
                backgroundColor: "rgba(148, 54, 54, 0.75)",
                color: "#fff",
                fontSize: "13px",
              },
            })}
            tickCount={5}
            tooltipFormatter={(p) =>
              `${new Date(p.timestamp * 1000).toLocaleString()}: ${p.value}°C`
            }
          />
        </div>

        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <LatestDataComponent
            client={client}
            nodeId={nodeId}
            variable="humidity"
            title="Humidity Sensor"
            unit={"°C"}
            styles={({ value, loading, error }) => ({
              container: {
                background: loading
                  ? "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))"
                  : error
                  ? "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))"
                  : value > 80
                  ? "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))"
                  : "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))",
                borderRadius: 10,
                gap: 1,
              },
              value: {
                color: value > 80 ? "yellow" : "white",
                fontSize: value > 100? "40px" : "100px",
                fontWeight: 700,
                color: "#ffffff",
              },
              unit: { fontWeight: 400, color: "#ffffff", fontSize: "30px" },
              label: { fontWeight: 500, color: "#ffffff", fontSize: "20px" },
            })}
          />
        </div>

        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <LatestDataGauge
            client={client}
            nodeId={nodeId}
            variable="humidity"
            title="Humidity Sensor"
            unit={"°C"}
            showNeedle={false}
            styles={({ value, loading, error }) => ({
              container: {
                background: loading
                  ? "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))"
                  : error
                  ? "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))"
                  : value > 80
                  ? "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))"
                  : "linear-gradient(to right, rgb(47, 99, 255), rgb(20, 110, 180))",
                borderRadius: 10,
                gap: 1,
              },
              value: {
                fontWeight: 700,
                fontSize: "30px",
                color: "#ffffff",
              },
              unit: { fontWeight: 400, color: "#ffffff", fontSize: "30px" },
              label: { fontWeight: 500, color: "#ffffff", fontSize: "20px" },
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
