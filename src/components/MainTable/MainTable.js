import React from 'react';
import {
    Table
} from 'react-bootstrap';

import ShowButton from '../TableActionsButtons/ShowButton';
import DeleteButton from '../TableActionsButtons/DeleteButton';

class MainTable extends React.Component {
    render() {
        const {
            usersData,
            columnsName
        } = this.props;
        if (Object.keys(usersData).length) {
            return (
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            {Object.keys(columnsName).map((value, index) => {
                                return <td key={index}>{columnsName[value]}</td>
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            usersData.map((usersData, userIndex) => {
                                return (
                                    <tr key={userIndex}>
                                        {
                                            Object.keys(columnsName).map((columnKey, columnIndex) => {
                                                if (columnKey === 'actions') {
                                                    return <th key={columnIndex + userIndex}><ShowButton
                                                        userId={userIndex}/><DeleteButton userId={userIndex}/></th>
                                                } else {
                                                    return <th key={columnIndex + userIndex}>{
                                                        usersData[columnKey] || usersData[columnKey] === 0
                                                            ? usersData[columnKey]
                                                            : 'N/A'
                                                    }</th>
                                                }
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>

            )
        } else {
            return '';
        }
    }
}

export default MainTable;