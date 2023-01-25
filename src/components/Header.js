import './Header.module.css'
import { Box } from "@mui/system";
import { Link } from '@mui/material';
const Header =()=>{
    return(
        <>
            <Box sx={{
                display:'flex',
                justifyContent:'space-between'
            }}>
            <Link sx={{
                paddingLeft: '88px',
                paddingTop: '40px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '30px',
                textTransform: 'capitalize',
                color: '#FFC300',
                textDecoration:'none'
            }}>NoodleTown</Link>

            <Link sx={{
                 paddingLeft: '1030px',
                 paddingTop: '40px',
                 fontFamily: 'Poppins',
                 fontStyle: 'normal',
                 fontWeight: 500,
                 fontSize: '20px',
                 lineHeight: '30px',
                 textTransform: 'capitalize',
                 color: 'black',
                 textDecoration:'none'
            }} >Menu</Link>
            <Link><img style={{
                paddingRight: '220px',
                paddingTop: '40px',
                width: '25px',
                height: '30px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '20px',
                color: 'black',
            }} src="images/Group6.png" alt="cart" /></Link>
            </Box>
            
        </>
    )
}

export default Header;