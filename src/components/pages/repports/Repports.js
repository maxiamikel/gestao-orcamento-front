import React, {useState, useEffect} from 'react';
function Repports(){

    const [projetos, setProjetos] =  useState([]);
    //https://www.youtube.com/watch?v=m7vXKkcdL-w&list=PLWXw8Gu52TRKouXUo3Abu33_ODPXZTz64&index=24
    useEffect( () => {
        fetch("http://localhost:1030/api/projetos/")
        .then(resp => resp.json())
        .then(resp_data => setProjetos(resp_data));
    }, []);

    

    return(

        <div className="container">
            {
                JSON.stringify(projetos)
            }
            <table className="table">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>td row 1</td>
                        <td>td row 2</td>
                        <td>td row 3</td>
                        <td>td row 4</td>
                        <td>td row 5</td>
                    </tr>
                </tbody>
            </table>
            {
                projetos.map( () => {

                })
            }
        </div>
        
    );
}
export default Repports;