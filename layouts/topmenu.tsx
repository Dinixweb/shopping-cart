import {MdToys} from 'react-icons/md'
import {GrCatalog} from 'react-icons/gr'
import {CgGhostCharacter} from 'react-icons/cg'
import {TbBrandApple} from 'react-icons/tb'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'


const TopMenu = () => {
return (
<div className="main">
    <nav className="navbar navbar-expand-lg ">
        <div className="main">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item  border-end">
                            <span className="icons">
                                <a className="nav-link active m-4 ps-4 pe-4" aria-current="page" href="#">Toys <MdToys size={23} style={{marginLeft:10}}/></a>
                                
                       </span>
                    </li>
                    <li className="nav-item  border-end">
                        <a className="nav-link m-4 ps-4 pe-4" href="#">Catalog<GrCatalog size={20} style={{marginLeft:10}}/></a>
                    </li>
                   
                    <li className="nav-item  border-end">
                        <a className="nav-link m-4 ps-4 pe-4" href="#">Characters <CgGhostCharacter size={23} style={{marginLeft:10}}/> </a>
                        </li>
                         <li className="nav-item  border-end">
                        <a className="nav-link m-4 ps-4 pe-4" href="#">Brand <TbBrandApple size={23} style={{marginLeft:10}}/></a>
                        </li>
                         <li className="nav-item  dropdown border-end ">
                        <a className="nav-link m-4 ps-4 pe-4 dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            ENG
                        </a>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">FR</a></li>
                            <li><a className="dropdown-item" href="#">AFR</a></li>
                        </ul>
                        </li>
                        <li className="nav-item  border-end">
                        <a className="nav-link m-4 ps-4 pe-4" href="#">Cart <AiOutlineShoppingCart size={20} style={{marginLeft:10}}/></a>
                        </li>
                         <li className="nav-item  border-end">
                        <a className="nav-link m-4 ps-4 pe-4"><VscAccount size={25} style={{marginRight:10}}/>Micheal</a>
                        </li>
                </ul>
               
            </div>
        </div>
    </nav>
</div>
)
}
export default TopMenu