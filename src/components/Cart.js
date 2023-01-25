import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import './Cart.module.css'
import Header from "./Header";
import { styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 3,
      position: 'relative',
      backgroundColor: '#F3F3F3',
      fontSize: 13,
      fontFamily:'Poppins',
      fontWeight:'400',
      width: '220px',
      padding: '10px 20px',
      color:'#848484',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
    },
  }));
  

const Cart =()=>{
    return(
        <>
            <Header/>
            <Box >
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "32px",
                    lineHeight: "36px",
                    textTransform: "capitalize",
                    color: "#000000",
                    paddingTop:'80px',
                    paddingLeft:'88px'
                }}> Your Cart</Typography>
            </Box>
            <Box sx={{
                marginTop:'50px'
            }}>
                <Box sx={{
                    backgroundColor:'#F9F9F9',
                    width: '449px',
                    height: '702px',
                    marginLeft:'88px'
                }}>
                    <Box sx={{
                        padding:'28px'
                    }}><img src='images/Rectangle1151.png' alt=''/></Box>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        padding:'0px 35px 0px 28px'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: '#000000',
                        }}>
                            Margherita Pizza
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: '#FFA500',
                        }}>
                            ₹140
                        </Typography>
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#848484',
                        paddingLeft:'28px',
                        paddingTop:'10px'
                    }}>
                        A Classic Cheesy Margharita. Can't Go Wrong.
                    </Typography>
                    <Box sx={{paddingLeft:'28px',paddingTop:'30px'}}>
                    <BootstrapInput defaultValue="Apply Coupon Code" id="bootstrap-input" />
                    <Button sx={{
                        width: "130px",
                        height: "40px",
                        fontSize:'18px',
                        paddingLeft:'30px',
                        justifyContent: "flex-start",
                        backgroundColor: "#FFC300",
                        color: "#ffffff",
                        "&:hover": {
                            backgroundColor: "#FFC300",
                            color: "#ffffff",
                        } 
                        }}>Apply
                    </Button>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        paddingLeft:'28px',
                        paddingTop:'40px'
                    }}>
                        <Button sx={{
                            width: '48px',
                            height: '43px',
                            backgroundColor:'#F3F3F3',
                            color:'#999999',
                            fontSize:'20px'
                        }}>-
                        </Button>
                        <Typography sx={{
                            width: '48px',
                            height: '43px',
                            fontSize:'20px',
                            textAlign:'center'
                            
                        }}>01</Typography>
                        <Button sx={{
                            width: '48px',
                            height: '43px',
                            backgroundColor:'#F3F3F3',
                            color:'#999999',
                            fontSize:'20px',
                        }}>+
                        </Button>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        paddingLeft:'28px',
                        paddingRight:'35px',
                        paddingTop:'40px'
                    }}>
                        <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '21px',
                                color: '#848484',
                                textTransform:'capitalize'
                            }}>subtotal
                        </Typography>
                        <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '20px',
                                lineHeight: '21px',
                                color: '#FFA500',
                            }}>
                            ₹120
                        </Typography>
                    </Box>
                    <Divider sx={{
                        width:'388px',
                        marginLeft:'28px',
                        marginTop:'10px'
                    }}/>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        paddingLeft:'28px',
                        paddingRight:'35px',
                        paddingTop:'20px'
                        }}>
                        <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '21px',
                                color: '#848484',
                                textTransform:'capitalize'
                            }}>total
                        </Typography>
                        <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '20px',
                                lineHeight: '21px',
                                color: '#FFA500',
                            }}>₹140
                        </Typography>
                    </Box>

                    <Button
                        sx={{
                        width: "392px",
                        height: "43px",
                        textAlign: "left",
                        justifyContent: "flex-start",
                        backgroundColor: "#FFC300",
                        marginTop: "60px",
                        marginLeft:'28px',
                        fontFamily:'Poppins',
                        fontSize:'20px',
                        color: "#ffffff",
                        textTransform:'capitalize',
                        paddingLeft:'140px',
                        "&:hover": {
                            backgroundColor: "#FFC300",
                            color: "#ffffff",
                        },
                        }}
                    >
                        order now
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Cart;