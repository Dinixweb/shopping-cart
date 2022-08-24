import TopMenu from "../layouts/topmenu"
import {SiPicartodottv} from 'react-icons/si'
const TopNav = () => {
return (
<div className="main">
  <div className="row">
    <div className="col-3 border-bottom border-end p-3">
        <span className="ms-5 fs-2"><SiPicartodottv style={{ marginTop: -5 }} />MICART</span>
    </div>
    <div className="col-9 border-bottom">
      <TopMenu />
    </div>
  </div>
</div>
)
}
export default TopNav