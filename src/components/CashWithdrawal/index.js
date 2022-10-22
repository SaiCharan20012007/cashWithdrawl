// Write your code here
import {Component} from 'react'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  debitFifty = () => {
    this.setState(prevState => ({balance: prevState.balance - 50}))
  }

  debitHundred = () => {
    this.setState(prevState => ({balance: prevState.balance - 100}))
  }

  debitTwo = () => {
    this.setState(prevState => ({balance: prevState.balance - 200}))
  }

  debitFive = () => {
    this.setState(prevState => ({balance: prevState.balance - 500}))
  }

  render() {
    const {balance} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <div className="nameCard">
            <div className="profile">S</div>
            <p className="name">Sai Charan</p>
          </div>
          <div className="balanceCard">
            <p className="yourBalance">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="yourBalance">In Rupees</p>
            </div>
          </div>
          <p className="balance">Withdraw</p>
          <p className="yourBalance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttonsContainer">
            <div className="btnC1">
              <li className="btn1" onClick={this.debitFifty}>
                50
              </li>
              <li className="btn1" type="button" onClick={this.debitHundred}>
                100
              </li>
            </div>
            <div className="btnC1">
              <li className="btn1" type="button" onClick={this.debitTwo}>
                200
              </li>
              <li className="btn1" type="button" onClick={this.debitFive}>
                500
              </li>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
