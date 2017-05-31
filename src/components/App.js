import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1>Yonks</h1>
        </div>
        <div className="App__body">
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Blog</th>
                <th>Facebook</th>
                <th>Instagram</th>
                <th>Pinterest</th>
                <th>Twitter</th>
              </tr>
              <tr>
                <th>Mon 29</th>
                <td>
                  <b>9:30</b> How to use blogging to get your dream travel job<br />
                  <b>1:00</b> How much does it actually cost to visit the Nordics?
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Tue 30</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Wed 31</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Thu 1</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Fri 2</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Sat 3</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Sun 4</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
