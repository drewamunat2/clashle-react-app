import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import {FaTiktok, FaYoutube} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";
import { Paper } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const paperStyle = {
  justifyContent: "right",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  display: "flex",
  backgroundColor: '#b7c9e2'
}

export function ExpandedSocial() {

  return (
    <>
      <Paper 
        elevation={0} 
        square={true}
        style={paperStyle}
      > 
        <IconButton color="primary" href='https://www.facebook.com/galaxyconlive/'>
          <FacebookIcon/>
        </IconButton>
        <IconButton color="primary" href='https://www.instagram.com/galaxyconlive/'>
          <InstagramIcon/>
        </IconButton>
        <IconButton color="primary" href='https://twitter.com/galaxyconlive'>
          <TwitterIcon/>
        </IconButton>
        <IconButton color="primary" href='https://www.youtube.com/galaxycon'>
          <FaYoutube/>
        </IconButton>
        <IconButton color="primary" href='https://www.tiktok.com/@galaxycon'>
          <FaTiktok/>
        </IconButton>
        <IconButton 
          color="primary" 
          href='mailto:info@galaxycon.com?subject=Geekle Help'
        >
          <EmailIcon/>
        </IconButton>
        <IconButton color="primary" href='https://galaxycon.com/'>
          <LanguageIcon/>
        </IconButton>
        <IconButton />
      </Paper>
    </>
  );
};

export function ContainedSocial() {

  const [profileMenu, setProfileMenu] = useState(null);

  return (
    <Paper 
      elevation={0} 
      square={true}
      style={paperStyle}
    > 
      <IconButton
        aria-haspopup='true'
        aria-controls='social-menu'
        onClick={e => setProfileMenu(e.currentTarget)}
        aria-label="Open Social Media"
        title="Open Social Media"
        color="primary"
      >
        <AiOutlineMenu/>
      </IconButton>
      <Menu
        id='social-menu' 
        open={Boolean(profileMenu)} 
        anchorEl={profileMenu}
        onClose={() => setProfileMenu(null)}
        disableAutoFocusItem
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
          <IconButton color="primary" href='https://www.facebook.com/galaxyconlive/'>
            <FacebookIcon/>
          </IconButton>
          <IconButton color="primary" href='https://www.instagram.com/galaxyconlive/'>
            <InstagramIcon/>
          </IconButton>
          <IconButton color="primary" href='https://twitter.com/galaxyconlive'>
            <TwitterIcon/>
          </IconButton>
          <IconButton color="primary" href='https://www.youtube.com/galaxycon'>
            <FaYoutube/>
          </IconButton>
          <IconButton color="primary" href='https://www.tiktok.com/@galaxycon'>
            <FaTiktok/>
          </IconButton>
          <IconButton 
            color="primary" 
            href='mailto:info@galaxycon.com?subject=Geekle Help'
          >
            <EmailIcon/>
          </IconButton>
          <IconButton color="primary" href='https://galaxycon.com/'>
            <LanguageIcon/>
          </IconButton>
        </MenuItem>
      </Menu>
      <IconButton />
    </Paper>
  );

};