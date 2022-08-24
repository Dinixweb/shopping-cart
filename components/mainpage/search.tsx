import { IoSearchOutline } from 'react-icons/io5'
import { BsFilter } from 'react-icons/bs'
import { MdClear } from 'react-icons/md'

const Search = () => {
return (
<div className="main">
    <div className="row">
        <h2>Catalog</h2>
        <div className="col-8">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <IoSearchOutline size={25} /></span>
                <input type="text" className="form-control search" placeholder="Username" aria-label="Username"
                    aria-describedby="basic-addon1" />
            </div>
        </div>
        <div className="col-3">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <BsFilter size={25} /></span>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            </div>
            <span className='filterList ms-3'>
                <li>Ball<MdClear style={{marginLeft:5, marginTop:-5}} /></li>
                <li>Games<MdClear style={{marginLeft:5, marginTop:-5}} /></li>
            </span>
    </div>
</div>
)
}
export default Search