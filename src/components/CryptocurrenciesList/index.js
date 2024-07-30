// Write your JS code here
import './index.css'

const CryptocurrenciesList = props => {
  const {blogDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = blogDetails

  return (
    <li className="blogs">
      <h1>{currencyName}</h1>

      <h1>{usdValue}</h1>

      <h1>{euroValue}</h1>
      <img src={currencyLogo} alt="img" className="image" />
    </li>
  )
}
export default CryptocurrenciesList
