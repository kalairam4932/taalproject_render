import { useQuery } from "@tanstack/react-query";


const AircraftTable = () => {
  const { data: aircraftdata, isLoading, isError } = useQuery({
    queryKey: ["aircraftdatakey"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:4000/api/aircraft/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      } catch (error) {
        console.log(`Error message: ${error.message}`);
        throw error;
      }
    },
  });

  // **Loading state**
  if (isLoading) return <p>Loading...</p>;

  // **Error state**
  if (isError) return <p>Error fetching data.</p>;

  return (
    <>
    <p className="hai">hai</p>
    <table className="table">
      <thead>
        <tr >
          <th scope="col">#</th>
          <th scope="col">Reg No</th>
          <th scope="col">Category</th>
          <th scope="col">Owner</th>
          <th scope="col">Operator</th>
        </tr>
      </thead>
      <tbody>
        {aircraftdata && aircraftdata.length > 0 ? (
          aircraftdata.map((aircraft, index) => (
            <tr key={aircraft._id}         >
              <th scope="row">{index + 1}</th>
              <td>{aircraft.regno}</td>
              <td>{aircraft.category}</td>
              <td>{aircraft.owner}</td>
              <td>{aircraft.operator}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No data available</td>
          </tr>
        )}
      </tbody>
    </table>

    </>
  );
};

export default AircraftTable;
