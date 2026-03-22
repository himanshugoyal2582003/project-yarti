import '../../globals.css';


const carData = [
  { type: 'AC Sedans', models: 'Etios, Amaze, Dzire etc.', pax: '4 Pax', ideal: 'Comfortable trips with small families', fare: 'Rs.11/KM' },
  { type: 'AC Hatchbacks', models: 'Wagon R, Celerio, Micra etc.', pax: '4 Pax', ideal: 'Budget trips over short distances', fare: 'Rs.11/KM' },
  { type: 'AC SUV', models: 'Ertiga, Xylo etc.', pax: '6-7 Pax', ideal: 'Premium trips with large families', fare: 'Rs.13/KM' },
];


export default function CarList(){
    return (
        <div className="car-table-section">
        <table className="car-table">
          <thead>
            <tr>
              <th>CAR TYPE</th>
              <th>MODEL INCLUDES</th>
              <th>PASSENGERS</th>
              <th>IDEAL FOR</th>
              <th>FARE</th>
            </tr>
          </thead>
          <tbody>
            {carData.map((row, i) => (
              <tr key={i}>
                <td>{row.type}</td>
                <td>{row.models}</td>
                <td>{row.pax}</td>
                <td>{row.ideal}</td>
                <td>{row.fare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}