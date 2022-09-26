import { Chart } from "react-google-charts";

export const Graphic = () => {

  console.log("Graphic Atualizou")

  const data = [
    {firstName: "Gabriel", lastName: "Silva", participation: 50},
    {firstName: "Lany", lastName: "Santos", participation: 50},
  ];

  const a = (da: any) => {
    const b = da.map((i: any) => [i.firstName, i.participation])

    return [["Ola", "Mundo"], ...b]
  }

  const aaa = a(data)

  const options = {
    title: "presence of students",
    is3D: true,
  };
  
  return ( 
      <Chart
        chartType="PieChart"
        data={aaa}
        options={options}
        width={"100%"}
        height={"400px"}
      />
  );
};