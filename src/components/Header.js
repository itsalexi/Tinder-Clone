import '../css/Header.css';
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <Person2Icon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className="tinder__icon "
                src="https://i.ibb.co/JsskR7R/image-2022-10-27-100632314.png"
                alt="tinder_logo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    );
}

export default Header;
