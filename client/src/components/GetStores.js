import React from 'react'
import './GetStore.css'

function GetStores(props) {



    return (
        <div>
            <table>
                <tr>
                    <th><h5>Store</h5></th>
                    <th><h5>Price</h5></th>
                    <th><h5>Website</h5></th>
                </tr>
                <tr>
                    <td><p><strong>{props.store_name}</strong></p></td>
                    <td><p className="price"><strong>{props.currency_symbol}{props.store_price} {props.currency_code}</strong></p></td>
                    <td> <p><strong><a href={props.product_url}>Store Link</a></strong></p></td>
                </tr>
            </table>
        </div>

    )
}

export default GetStores