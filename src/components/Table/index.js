import React from 'react'
import axios from 'axios'

class Table extends React.Component {
    state = {
        departamento: [],
        provincia: [],
        distrito: [],
    } 

    componentDidMount() {
        axios.get('http://localhost:3001/cities')
             .then(response => {
                 this.setState({
                    departamento: response.data.departamento,
                    provincia: response.data.provincia,
                    distrito: response.data.distrito,
                } )
                 console.log(this.state)
             })
             .catch(error => {
                 console.warn(error); 
             })
    }

    render(){
        const { departamento, provincia, distrito } = this.state
        
        return (
            <div>
                <h2>Departamento</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Código padre</th>
                        <th>Descripción padre</th>
                    </tr>
                    </thead>
                    <tbody>
                        {departamento.map(dep => (
                        <tr>
                            <td>{dep.code}</td>
                            <td>{dep.name}</td>
                            <td>{dep.parentCode == null ? '-' : dep.parentCode }</td>
                            <td>{dep.parentName == null ? '-' : dep.parentName }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Provincia</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Código padre</th>
                        <th>Descripción padre</th>
                    </tr>
                    </thead>
                    <tbody>
                        {provincia.map(dep => (
                        <tr>
                            <td>{dep.code}</td>
                            <td>{dep.name}</td>
                            <td>{dep.parentCode == null ? '-' : dep.parentCode }</td>
                            <td>{dep.parentName == null ? '-' : dep.parentName }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Distrito</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Código padre</th>
                        <th>Descripción padre</th>
                    </tr>
                    </thead>
                    <tbody>
                        {distrito.map(dep => (
                        <tr>
                            <td>{dep.code}</td>
                            <td>{dep.name}</td>
                            <td>{dep.parentCode == null ? '-' : dep.parentCode }</td>
                            <td>{dep.parentName == null ? '-' : dep.parentName }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table