import React, { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Navbar2 from '../Navbar/Navbar2';
import Button from 'react-bootstrap/Button';
import './Menu.css'
import Badge from 'react-bootstrap/Badge';

const Menu = () => {
    const [data,setData]=useState([
      {food_id:1,food_name:"Dosa",food_price:50,food_image:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg"},
      {food_id:1,food_name:"Idly",food_price:10,food_image:"https://tse3.mm.bing.net/th?id=OIP.acHMl7OKBxP2eZEgFZ7bJgHaFj&pid=Api&P=0&h=180"},
      {food_id:1,food_name:"Samosa",food_price:20,food_image:"https://tse2.mm.bing.net/th?id=OIP.9cd5aubJTQzVbCuIHJtYTwHaGl&pid=Api&P=0&h=180"},
      {food_id:1,food_name:"Paongal",food_price:30,food_image:"https://tse2.mm.bing.net/th?id=OIP.ff3K8IggGGjjcMM0kzj01QAAAA&pid=Api&P=0&h=180"},]);
    // const [count,setCount]=useState(0)
    // {
    //   setCount(count+1)
    // }
    
     function addToCart (id){  
    const url="http://localhost:5000/api/cart"
                const params={
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify( { 
                    food_id:id,
                    user_id:2
                })
                
            }
            fetch(url,params).then((res)=>{
                return res.json()
            }).then((data)=>{
            console.log(data);            
        })
        // setCount(count+1)
      }
     const fetchData=()=>{
      const url="http://localhost:5000/api/foods"
              const params={
              method:'get',
              headers:{
                  'Content-Type':'application/json'
              }
          }
          fetch(url,params).then((res)=>{
              return res.json()
          }).then((data)=>{
          console.log(data);
          setData(data)
          
      })
  }
    useEffect(()=>{
      fetchData();
  },[])

    return ( 

       <div>
            <Navbar2/>      
      <div className='menu'> 
          
      {data.map((f)=> { 
        return <Card className='card'> 
        <Card.Img variant="top" src={f.food_image} />
        <Badge bg="secondary">Huge Discounts</Badge>
        <Card.Body>
          <Card.Title>{f.food_name}</Card.Title>
          <Card.Text>
           Price {f.food_price}/-
          </Card.Text>
          <Button variant="primary" onClick={()=>{addToCart(f.food_id)}}>Add to cart</Button>
        </Card.Body>
        <Card.Text>
        
        <div className="ratings">
          {f.ratings}
                <i class="fa fa-star rating-color"></i>
            </div> 
        </Card.Text>
      </Card>
         
         })}
         
        </div>

      </div>
      
    );
};
export default Menu;
