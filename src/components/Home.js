import React, { useEffect, useState } from "react";
import classes from './Home.module.css'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';



const pizza = [
    {
        image: 'images/image32.png',
        name: 'Eatalian pizza',
        time: '32min',
        ingredient: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        shopping: 'pending',
        popular: false
    },
    {
        image: 'images/image28.png',
        name: 'Eatalian pizza',
        time: '32min',
        ingredient: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        shopping: 'done',
        popular: true
    }, {
        image: 'images/image30.png',
        name: 'Eatalian pizza',
        time: '32min',
        ingredient: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        shopping: 'available',
        popular: false
    },
    {
        image: 'images/image31.png',
        name: 'Eatalian pizza',
        time: '32min',
        ingredient: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        shopping: 'done',
        popular: true
    },
    {
        image: 'images/image32.png',
        name: 'Eatalian pizza',
        time: '32min',
        ingredient: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        shopping: 'pending',
        popular: false
    },
    {
        image: 'images/image28.png',
        name: 'Eatalian pizza',
        time: '32min',
        ingredient: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        shopping: 'done',
        popular: false
    },
    {
        image: 'images/image30.png',
        name: 'Eatalian pizza',
        time: '32min',
        ingredient: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        weight: '500NGN',
        shopping: 'available',
        popular: false
    }
]

const foodCollectionImages = [
    { image: 'images/Rectangle50.png'},
    { image: 'images/Rectangle51.png'},
    { image: 'images/Rectangle52.png'},
    { image: 'images/Rectangle53.png'},
    { image: 'images/Rectangle54.png'},
    { image: 'images/Rectangle55.png'},
]

const currencies = [
    {
        value: 'Surat',
        label: 'Surat',
    },
    {
        value: 'Vadodara',
        label: 'Vadodara',
    },
    {
        value: 'Ahemdabad',
        label: 'Ahemdabad',
    },
    {
        value: 'Vapi',
        label: 'Vapi',
    },
];

const Home = () => {

    const [pizzaValue, setPizzaValue] = useState([]);

    useEffect(() => {
        setPizzaValue(pizza)
    }, [])

    const [foodCollectionImage,setFoodCollectionImages] = useState([])
    
    useEffect(()=>{
        setFoodCollectionImages(foodCollectionImages);
    },[])


    return (
        <>
            <div>
                <div className={classes.header}></div>
                <img style={{ width: "100%" }} src="images/Rectangle 1.png" alt="header" />
                <p className={classes.noodleTown}>NoodleTown</p>
                <p className={classes.menu}>Menu</p>
                <img className={classes.cart} src="images/Group 6.png" alt="cart" />
                <div>
                    <p className={classes.heading}>NOODLETOWN</p>
                    <p className={classes.headingDescription}>discover best food around you</p>
                </div>
                <div className={classes.searchBar}>
                    <TextField sx={{ padding: "15px 0 15px 30px" }}
                        id="standard-select-currency"
                        select
                        defaultValue="Surat"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Divider sx={{
                        width: '18px',
                        height: '0px',
                        marginLeft: '30px',
                        marginTop: '30px',
                        border: '1px solid #000000',
                        transform: 'rotate(90deg)'
                    }}
                        orientation="vertical" flexItem />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon sx={{ paddingLeft: '60px' }} />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="search for restraunt, cuisine, place"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <div className={classes.foodCards}>
                    <img src="images/Rectangle 9.png" alt="" />
                    <h6 className={classes.cardHeading}>dinning out</h6>
                    <p className={classes.cardPara}>Explore curated lists of top restaurants,</p>
                </div>
                <div className={classes.foodCards}>
                    <img src="images/Rectangle 7.png" alt="" />
                    <h6 className={classes.cardHeading}>dinning out</h6>
                    <p className={classes.cardPara}>Explore curated lists of top restaurants,</p>
                </div>
                <div className={classes.foodCards}>
                    <img src="images/Rectangle 11.png" alt="" />
                    <h6 className={classes.cardHeading}>dinning out</h6>
                    <p className={classes.cardPara}>Explore curated lists of top restaurants,</p>
                </div>
            </div>
            <div>
                <h3 className={classes.typography}>Our best delivered cuisines</h3>
                <p className={classes.typographyPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
            <div className={classes.ellipseImgContainer}>
                <div>
                    <img src="images/Ellipse 1.png" alt="" />
                    <h6 className={classes.ellipseName}>chicken noodles</h6>
                </div>
                <Divider sx={{
                    width: '213px',
                    height: '0px',
                    marginTop: '116px',
                    marginLeft: '70px',
                    marginRight: '70px',
                    border: '2px solid #FFC200',
                }}
                    flexItem />
                <div>
                    <img src="images/Ellipse 2.png" alt="" />
                    <h6 className={classes.ellipseName}>french fries</h6>
                </div>
                <Divider sx={{
                    width: '213px',
                    height: '0px',
                    marginTop: '116px',
                    marginLeft: '70px',
                    marginRight: '70px',
                    border: '2px solid #FFC200',
                }}
                    flexItem />
                <div >
                    <img src="images/Ellipse 3.png" alt="" />
                    <h6 className={classes.ellipseName}>avacado mint noodles</h6>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: "space-between", paddingTop: '110px' }}>
                <img src="images/Vector2.png" alt="" />
                <h3 className={classes.popularRecipe}>Popular Recipes</h3>
                <img src="images/Vector 3.png" alt="" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <button style={
                    {
                        backgroundColor: '#F6B716',
                        width: '161px',
                        height: '67px',
                        borderRadius: '45px',
                        border: '0px',
                        fontFamily: 'Poppins',
                        color: 'white',
                        fontWeight: '600'
                    }}>Pizza</button>
                <button className={classes.menuButtons}>Sides</button>
                <button className={classes.menuButtons}>Chicken</button>
                <button className={classes.menuButtons}>Dessert</button>
                <button className={classes.menuButtons}>Drinks</button>
            </div>

            <div className={classes.pizzaCardContainer}>
                {
                    pizzaValue.map((pizza, index) => {
                        const pizzaIconPending = {
                            position: 'absolute',
                            height: '40px',
                            right: '133px',
                            top: '467px',
                            color: 'white',
                            background: '#ffffff',
                            borderRadius: '59px',
                            border: '1px solid #ECEEF7',
                            zIndex: '2'
                        }
                        const pizzaIconDone = {
                            position: 'absolute',
                            height: '40px',
                            right: '133px',
                            top: '467px',
                            color: 'white',
                            background: '#F6B716',
                            boxShadow: '0px 4px 8px rgba(205, 71, 41, 0.26)',
                            borderRadius: '59px',
                            border: '0px',
                            zIndex: '2'
                        }
                        const pizzaIconAvailable = {
                            position: 'absolute',
                            height: '40px',
                            right: '133px',
                            top: '467px',
                            color: 'black',
                            background: '#FFFFFF',
                            borderRadius: '59px',
                            border: '1px solid #ECEEF7',
                            zIndex: '2'
                        }
                        return (
                            <div className={classes.pizzaCards} style={{ marginTop: '115px' }}>
                                {pizza.popular && <p className={classes.popular}>Popular</p>}
                                <div style={{ width: '309px' }}><img className={classes.pizzaImg} src={pizza.image} alt="" /></div>
                                <div style={{ display: 'flex' }}>
                                    <h3 className={classes.pizzaName}>{pizza.name}</h3>
                                    <p className={classes.pizzaTime}>{pizza.time}</p>
                                </div>
                                <p className={classes.pizzaIngredient}>{pizza.ingredient}</p>
                                <h2 className={classes.pizzaWeight}>{pizza.weight}</h2>
                                <button style={pizza.shopping === 'pending' ? pizzaIconPending : pizza.shopping === 'done' ? pizzaIconDone : pizzaIconAvailable}><ShoppingBagIcon /></button>
                                <div className={classes.spikes}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div >
                <img className={classes.adDiv} src="images/Rectangle12.png" alt="" />
                <p className={classes.adHeading}>fastest food <span style={{ color: 'yellow' }}>delivery </span> in the town</p>
            </div>
            <div className={classes.foodDiv}>
                <div>
                    <img src="images/Rectangle14.png" alt="" />
                    <p className={classes.foodAdHeading}>buy 2 get 1 free</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px', paddingBottom: '10px', gap: '15px' }}>
                    <img src="images/Rectangle15.png" alt="" />
                    <img src="images/Rectangle16.png" alt="" />
                </div>
            </div>
            <div style={{
                position: 'absolute',
                left: '157px',
                top: '434.2%',
                width :'1506px',
                height:'835px', 
                opacity:'0.49',
                backgroundColor:'#191f2c'
                }}></div>

                <Box sx={{
                    position: 'relative',
                    width: '636px',
                    height: '205px',
                    left: '585px',
                    top: '570px',
                    background: '#F6B716',
                    boxShadow: '0px 20px 25px rgba(246, 183, 22, 0.25)',
                    borderRadius: '15px',
                }}>
                    <Typography sx={{
                        position: 'absolute',
                        width: '453px',
                        height: '76px',
                        left: '77px',
                        top: '35px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '22px',
                        lineHeight: '151.02%',
                        textAlign: 'center',
                        color: '#FFFFFF',
                    }}>
                        Follow Us On Instagram To See Pictures Taken By Our Customers
                    </Typography>
                    <Typography sx={{
                        position: 'absolute',
                        left: '221px',
                        right: '54.58%',
                        top: '62%',
                        bottom: '42.05%',
                    }}>
                        <img src="images/Vector4.png" alt=""/>
                        <Typography sx={{
                           position: 'absolute',
                           width: '160.13px',
                           height: '37.04px',
                           left: '39px',
                           top: '-2px',
                           fontFamily: 'Inter',
                           fontStyle: 'normal',
                           fontWeight: '600',
                           fontSize: '22px',
                           lineHeight: '33px', 
                           textAlign: 'center',
                           color: '#FFFFFF' 
                        }}>
                        : @santorins
                        </Typography>
                    </Typography>
                    
                </Box>
            <Grid container spacing={5} style={{ paddingLeft: '145px', paddingRight: '173px',marginTop:'14px' }} >
                {
                    foodCollectionImage.map((foodImages,index)=>{
                        return(
                            <Grid item sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >
                                <img  style={{}} src={foodImages.image} alt="" />
                            </Grid>
                        )
                    })
                }
            </Grid>
           
            <Box>
                <img style={{padding:'115px 255px'}} src="images/Frame3.png" alt=""/>
            </Box>
           
        </>
    )
}

export default Home;