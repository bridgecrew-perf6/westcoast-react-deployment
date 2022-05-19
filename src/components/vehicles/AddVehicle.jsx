import { useState } from 'react';

function AddVehicle() {
    const [regNo, setRegNo] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [modelYear, setModelYear] = useState("");
    const [mileage, setMileage] = useState("");
    const [imageUrl, setImageUrl] = useState("https://i.postimg.cc/Fsy2yyh8/car2.jpg");
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");



    function onHandleRegNoTextChanged(e) {
        setRegNo(e.target.value);
    }
    function onHandleManufacturerTextChanged(e) {
        setManufacturer(e.target.value);
    }
    function onHandleModelTextChanged(e) {
        setModel(e.target.value);
    }
    function onHandleModelYearTextChanged(e) {
        setModelYear(e.target.value);
    }
    function onHandleMileageTextChanged(e) {
        setMileage(e.target.value);
    }
    function onHandleImageUrlTextChanged(e) {
        setImageUrl(e.target.value);
    }
    function onHandleValueTextChanged(e) {
        setValue(e.target.value);
    }
    function onHandleDescriptionTextChanged(e) {
        setDescription(e.target.value);
    }

    function handleSaveVehicle(e) {
        e.preventDefault();
        const vehicle = {
            regNo,
            manufacturer,
            model,
            modelYear,
            mileage,
            imageUrl,
            value,
            description
        }
        console.log(vehicle);

        saveVehicle(vehicle);
    }

    async function saveVehicle(vehicle) {
        const url = `${process.env.REACT_APP_BASEURL}/vehicles`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vehicle)
        });

        if (response.status >= 200 && response.status <= 299) {
            console.log("The vehicle was saved to the database");
            console.log(await response.json());
        }
        else {
            console.log("An error occurred while saving the vehicle");
            console.log(await response.json());
        }
    }

    return (
        <>
            <h1 className='page-title'>Add a new vehicle</h1>
            <section className='form-container'>
                <h4>Vehicle information</h4>
                <section className='form-wrapper'>
                    <form className='form' onSubmit={handleSaveVehicle}>
                        <div className='form-control'>
                            <label htmlFor=''>Registration number</label>
                            <input onChange={onHandleRegNoTextChanged} value={regNo} type='text' id='regNo' name='regNo' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='manufacturer'>Manufacturer</label>
                            <input onChange={onHandleManufacturerTextChanged} value={manufacturer} type='text' id='manufacturer' name='manufacturer' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='model'>Model</label>
                            <input onChange={onHandleModelTextChanged} value={model} type='text' id='model' name='model' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='modelYear'>Model year</label>
                            <input onChange={onHandleModelYearTextChanged} value={modelYear} type='text' id='modelYear' name='modelYear' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='mileage'>Mileage</label>
                            <input onChange={onHandleMileageTextChanged} value={mileage} type='text' id='mileage' name='mileage' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='imageUrl'>Image URL</label>
                            <input onChange={onHandleImageUrlTextChanged} value={imageUrl} type='text' id='imageUrl' name='imageUrl' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='value'>Price</label>
                            <input onChange={onHandleValueTextChanged} value={value} type='text' id='value' name='value' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='description'>Description</label>
                            <input onChange={onHandleDescriptionTextChanged} value={description} type='text' id='description' name='description' />
                        </div>
                        <div className='buttons'>
                            <button type='submit' className='btn'>
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </>
    );
}

export default AddVehicle;