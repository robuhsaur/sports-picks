import React from "react";
import { Scrollbars } from 'react-custom-scrollbars-2'


class MyGurus extends React.Component {
    render() {

        return (
            <div class="row justify-content-center">
                <div class="col-auto">
                <div class="card">
                    <Scrollbars style={{ width: 500, height: 300 }}>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th class="th-sm">User
                                        </th>
                                        <th class="th-sm">Description
                                        </th>
                                        <th class="th-sm">subscribe
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>stuff stuff stuff</td>
                                        <td>subscribe</td>
                                    </tr>
                                </tbody>
                            </table>
                    </Scrollbars >
                    </div>
                </div>
            </div>
        )
    }
}
export default MyGurus