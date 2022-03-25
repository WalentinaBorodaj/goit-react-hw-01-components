import propTypes from "prop-types"
import s from './TransactionHistory.module.css'

function TransactionHistory({items}) {
    return (
    <table className={s.transactionHistory}>
        <thead>
            <tr>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
            </tr>
        </thead>
            {items.map(item => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
               </tbody>
           ))} 
    </table>
)

}

export default TransactionHistory

TransactionHistory.propTypes = {
    type: propTypes.string,
    amount: propTypes.string,
    currency: propTypes.string
}

