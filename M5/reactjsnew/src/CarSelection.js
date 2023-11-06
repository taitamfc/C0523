import React, { useState } from 'react';

function CarSelection(props) {
    // const [selectedCar,setSelectedCar] = useState('');
    // const [selectedColor,setSelectedColor] = useState('');

    const [selectedCar,setSelectedCar] = useState({
        'name' : '',
        'color' : ''
    });


    const handleCar = (e) => {
        setSelectedCar({
            ...selectedCar,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <div> {selectedCar.name} - {selectedCar.color} </div>
            Select a car :
            <select name='name' onChange={handleCar}>
                <option value="">Vui lòng chọn</option>
                <option value="Mẹc">Mẹc</option>
                <option value={'Vin'}>Vin</option>
            </select>
            <br/>
            Select a color :
            <select name='color' onChange={handleCar}>
                <option value="">Vui lòng chọn</option>
                <option value="Red">Red</option>
                <option value={'Blue'}>Blue</option>
            </select>
            <br/>
        </div>
    );
}

export default CarSelection;