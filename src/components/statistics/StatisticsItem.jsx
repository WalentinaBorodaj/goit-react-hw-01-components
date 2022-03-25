import propTypes from "prop-types"
import s from './StatisticsItem.module.css'

function StatisticsItem({ id, label, percentage}) {
    return (
            <li className={s.item} key={id}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}</span>
            </li>
    )

}

export default StatisticsItem

StatisticsItem.propTypes = {
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
}