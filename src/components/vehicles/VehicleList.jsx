import { useEffect, useState } from "react";

import VehicleItem from "./VehicleItem"; // Represents one line of vehicle data



function VehicleList() {
    const [vehicles, setVehicles] = useState([]); // Use state takes an initial value of the specified variable in the array function

    // useEffect runs every time the Virtual DOM is manipulated
    useEffect(() => {
        loadVehicles();
    }, []); // useEffect may take a dependencyList-argument that if these items change, it should run
    // If we set it to an empty array, useEffect will only run once.

    const loadVehicles = async () => {
        const token = localStorage.getItem('token');       // Needs to be parsed if i choose to stringify it in Login.jsx
        // console.log(token);

        const url = `${process.env.REACT_APP_BASEURL}/vehicles/list`;
        const response = await fetch(url, {
            method: 'GET',          // Authorization using tokens
            headers: {
                'Authorization': `bearer ${token}`,
            }
        });

        if (!response.ok) {
            console.log("No vehicles were found, or something went wrong");
        }
        else {
            setVehicles(await response.json());
        }

    }

    const deleteVehicle = async (id) => {
        const url = `${process.env.REACT_APP_BASEURL}/vehicles/${id}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (response.status >= 200 && response.status <= 299) {
            console.log("The vehicle was deleted from the database");
            loadVehicles();
        }
        else {
            console.log("An error occurred while deleting the vehicle");
        }
    }

    return (
        <>
            <h1 className="page-title">Current vehicles in stock</h1>
            <table>
                <thead>
                    <tr>
                        <th>Reg No.</th>
                        <th>Manufacturer</th>
                        <th>Model year</th>
                        <th>Mileage</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle) => (
                        <VehicleItem
                            vehicle={vehicle}
                            key={vehicle.vehicleId}
                            handleDeleteVehicle={deleteVehicle}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default VehicleList;