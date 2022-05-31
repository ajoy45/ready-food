import React from 'react';
import image1 from '../../../images/dinner/dinner1.png';
import image2 from '../../../images//dinner/dinner2.png';
import image3 from '../../../images/dinner/dinner3.png';
import image4 from '../../../images/dinner/dinner4.png';
import image5 from '../../../images/dinner/dinner5.png';
import image6 from '../../../images/dinner/dinner6.png';
import DinnerFood from './DinnerFood';
const Dinner = () => {
    const dinnerFastFoods=[
        {id:1,name:'Indian Dinner',price:500,img:image1},
        {id:2,name:'Bangladesh Dinner',price:200,img:image2},
        {id:3,name:'Nepal Dinner',price:499,img:image3},
        {id:4,name:'Thai Dinner',price:350,img:image4},
        {id:5,name:'Korian Dinner',price:199,img:image5},
        {id:6,name:'Singapur Dinner',price:1299,img:image6}
    ]
    return (
        <div className='row text-center'>
            {
                dinnerFastFoods.map(dinnerFood=><DinnerFood
                key={dinnerFood.id}
                dinnerFood={dinnerFood}
                ></DinnerFood>)
            }
        </div>
    );
};

export default Dinner;