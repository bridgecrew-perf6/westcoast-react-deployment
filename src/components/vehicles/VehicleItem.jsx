import { useNavigate } from 'react-router-dom';
function VehicleItem({ vehicle, handleDeleteVehicle }) {
    const navigate = useNavigate();

    const onEditClickHandler = () => {
        navigate(`/edit/${vehicle.vehicleId}`);
    }

    const onDeleteClickHandler = () => {
        navigate(`/delete/${vehicle.vehicleId}`);
    }

    const onDeletePermanentClickHandler = () => {
        handleDeleteVehicle(vehicle.vehicleId);
    }
    return (
        <tr>
            <td>{vehicle.regNo}</td>
            <td>{vehicle.vehicleName}</td>
            <td>{vehicle.modelYear}</td>
            <td>{vehicle.mileage}</td>
            <td>{vehicle.value}</td>
            <td>
                <span className="edit" onClick={onEditClickHandler}>
                    <i className="fa-solid fa-edit"></i>
                </span>
            </td>
            <td>
                <span className="delete" onClick={onDeleteClickHandler}>
                    <i className="fa-solid fa-trash-can"></i>
                </span>
            </td>
            <td>
                <span className="delete" onClick={onDeletePermanentClickHandler}>
                    <i className="fa-solid fa-trash"></i>
                </span>
            </td>
        </tr>
    )
}

export default VehicleItem;