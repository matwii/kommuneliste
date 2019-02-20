import React from 'react';
import './MunicipalList.css';
import moment from 'moment';

const MunicipalList = ({list}) => {
    console.log(list);
    const listItems = list.map((muni) =>
        <tr key={muni.label}>
            <th scope="row">{muni.label}</th>
            <td>{muni.description}</td>
            <td>{moment(muni.lastUpdated).format('LLL')}</td>
            <td>{muni.status === "Gyldig" ? 'Yes' : 'No'}</td>
        </tr>

    );
    return (
        <div className="table-container">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col">Active</th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
            </table>
        </div>
    )
};

export default MunicipalList;