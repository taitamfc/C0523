import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../models/Product';

function List(props) {
    // Làm việc với dữ liệu
    const [items, setItems] = useState([]);
    // Chạy 1 lần duy nhất
    useEffect(() => {
        // Gọi API, có dữ liệu trả về
        Product.getAll().then((res) => {
            setItems(res.data)
        });
    }, []);

    


    return (
        <div>

            <Link to={'/create'}>Create</Link>

            <h1>List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.length ? items.map((item, key) => (
                            <tr key={key}>
                                <td> {item.id} </td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> <Link to={'edit/' + item.id}>Edit</Link> </td>
                                <td> <Link to={'delete/' + item.id}>Delete</Link> </td>
                            </tr>
                        )) : ''
                    }
                </tbody>
            </table>
        </div>
    );
}

export default List;