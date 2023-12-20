// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {imgUrl, amountType, altText, bgName} = props
  const bgClassNames = `money-details-container ${bgName}`
  return (
    <li className={bgClassNames}>
      <img src={imgUrl} alt={altText} className="type-img" />
      <div className="type-container">
        <p>Your {amountType}</p>
        <p>Rs 0</p>
      </div>
    </li>
  )
}
export default MoneyDetails
