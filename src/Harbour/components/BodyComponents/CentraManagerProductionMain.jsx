import '../../css/ProductionCentraManager.css'
import ProductionImageContainer from './ProductionImageContainer'

// eslint-disable-next-line react/prop-types
function CentraManagerProductionMain() {
  return (
    <div>
      <ProductionImageContainer label={'Wet Leaves'}/>
      <ProductionImageContainer label={'Dry Leaves'}/>
      <ProductionImageContainer label={'Flour'}/>
    </div>
  )
}

export default CentraManagerProductionMain