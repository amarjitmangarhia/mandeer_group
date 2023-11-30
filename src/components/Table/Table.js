import React from 'react'
import classes from "./Table.module.css"

const Table = () => {
    return (
        <div className={classes.container}>
            <h2>Table Analysis</h2>
            <table>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Ask</th>
                        <th>Bid</th>
                        <th>Dividend Per Share</th>
                        <th>PE</th>
                        <th>Sector</th>
                    </tr>
                </thead>
                <tbody>
            <tr>
                <td>Maruti</td>
                <td>200</td>
                <td>210</td>
                <td>10</td>
                <td>9</td>
                <td>Automobiles</td>
            </tr>
            <tr>
                <td>Ford</td>
                <td>180</td>
                <td>190</td>
                <td>8</td>
                <td>7</td>
                <td>Automobiles</td>
            </tr>
            <tr>
                <td>Apple</td>
                <td>1000</td>
                <td>1100</td>
                <td>20</td>
                <td>18</td>
                <td>Technology</td>
            </tr>
            <tr>
                <td>Samsung</td>
                <td>800</td>
                <td>850</td>
                <td>15</td>
                <td>12</td>
                <td>Technology</td>
            </tr>
            <tr>
                <td>Nike</td>
                <td>50</td>
                <td>55</td>
                <td>5</td>
                <td>4</td>
                <td>Apparel</td>
            </tr>
            <tr>
                <td>Adidas</td>
                <td>45</td>
                <td>50</td>
                <td>4</td>
                <td>3</td>
                <td>Apparel</td>
            </tr>
        </tbody>
            </table>
        </div>
    )
}

export default Table