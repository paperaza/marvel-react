import './Header.scss';
import {Menu} from 'semantic-ui-react';
export default function Header() {
    return (
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item name="inicio"  onClick={()=>console.log("Haciendo clic en el menu")} />
                <Menu.Item name="series"  onClick={()=>console.log("Haciendo clic en el series")} />
                <Menu.Item name="comics"  onClick={()=>console.log("Haciendo clic en el comics")} />
            </Menu>
        </div>
    );
    
}
