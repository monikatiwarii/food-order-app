import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
// import classes from './Categories.module.css'


const topBrands = [
    {image :'images/Ellipse1.png',
    name : `La Pino'z Pizza`},
    {image :'images/Ellipse2.png',name : `McDonald's`},
    {image :'images/Ellipse3.png',name : `Starbucks`},
    {image :'images/Ellipse4.png',name : `Burger King`},
    {image :'images/Ellipse5.png',name : `KFC`},
    {image :'images/Ellipse6.png',name : `Coffee Culture`},
]

const foodList = [
     {
        image:'images/Rectangle 15.png',
        name :'vadapav',
        time :'20 min' 
     },
     {
        image:'images/Rectangle 16.png',
        name :'panipuri',
        time :'20 min' 
     },
     {
        image:'images/Rectangle 17.png',
        name :'pav bhaji',
        time :'20 min'
     },
     {
        image:'images/Rectangle 18.png',
        name :'ice-cream',
        time :'20 min'
     },
     {
        image:'images/Rectangle 19.png',
        name :'sandwich',
        time :'20 min' 
     },
     {
        image:'images/Rectangle 20.png',
        name :'pizza',
        time :'20 min' 
     }
]

const trandingFood =[
    { image : 'images/Rectangle 21.png',type:'veggie friendly',places:'29 places near you'},
    { image : 'images/Rectangle 23.png',type:'trending this week',places:'29 places near you'},
    { image : 'images/Rectangle 25.png',type:'authentic',places:'29 places near you'}
]

const Categories =()=>{

    const [topBrandsImages,setTopBrandsImages] = useState([])
    useEffect(()=>{
        setTopBrandsImages(topBrands)
    },[])


    const [foodItemList,setFoodItemList] = useState([]);
    useEffect(()=>{
        setFoodItemList(foodList)
    },[])

    const [trandingFoodList,setTrandingFoodList] = useState([])

    useEffect(()=>{
        setTrandingFoodList(trandingFood)
    },[])

    return(
        <>
        <Header/>
        <Box>
            <Typography sx={{
                        paddingLeft:'88px',
                        paddingTop:'50px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '28px',
                        lineHeight: '48px',
                        color: '#000000'
                        }}>
                Top brands for you
            </Typography>
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                // justifyContent:'center',
                margin : '30px 88px 30px',
                alignItems:'center'

              
            }}>
                {
                   topBrandsImages.map((topBrands,index)=>{
                    return (
                        <Box>
                            <img style={{width: '187px',height: '186px'}} 
                                src={topBrands.image} alt=""/>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '20px',
                                lineHeight: '30px',
                                textTransform: 'capitalize',
                                color: '#000000',
                                textAlign:'center',
                                paddingTop:'15px'
                            }}> {topBrands.name}
                            </Typography>
                        </Box>
                    )
                   }) 
                }
            </Box>
        </Box>
        <Box>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '28px',
                lineHeight: '48px',
                color: '#000000',
                paddingLeft:'88px',
                paddingTop:'50px'
            }}>
            Food according to weather
            </Typography>
            <Box sx={{
                display:'flex',
                flexWrap:'wrap',
                columnGap:'120px',
                rowGap:'50px',
                marginLeft :'88px',
                marginRight:'88px',
                marginTop:'90px'
            }}>
            {foodItemList.map((foodlist,index)=>{
                console.log(foodlist)
                return(
                <Box>
                    <img src={foodlist.image} alt=""/>
                    <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    textTransform: 'capitalize',
                                    color: '#000000',
                                    paddingTop:'10px',
                                    paddingLeft:'8px'
                                    }}>
                        {foodlist.name}
                    </Typography>
                    <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '300',
                                    fontSize: '16px',
                                    lineHeight: '30px',
                                    textTransform: 'capitalize',
                                    color: '#999999',
                                    paddingTop:'5px',
                                    paddingLeft:'8px'
                                }}>
                        {foodlist.time}
                    </Typography>
                </Box>
                )
            })}
            </Box>    
        </Box>

        <Box sx={{
            display :'flex',
            justifyContent:'space-between',
            marginLeft:'88px',
            marginTop:'180px',
            marginRight:'88px',
            marginBottom:'50px'
        }}>
            {
                trandingFoodList.map((trandingFoods)=>{
                    console.log(trandingFoods)
                    return (
                        <Box>
                            <img src={trandingFoods.image} alt=""/>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '30px',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                                translate: '18px -83px'
                            }}>
                                {trandingFoods.type}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '30px',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                                translate: '20px -83px'
                            }}>
                                {trandingFoods.places}</Typography>
                        </Box>
                    )
                })
            }
        </Box>
        </>
    )
}

export default Categories;