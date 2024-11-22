import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMenu from "../ownerComponents/HeaderMenu";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import shoplogo from "../assets/shoplogo.png"
import {Dropdown} from 'react-bootstrap';
import rice from '../assets/rice.png'
import langIcon from '../assets/lang.png'


const StallMenu = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  useEffect(() => {
    const data = [
      {
        pic: shoplogo,
        name: "Siam Brasserie 1",
        res_type: "à la carte",
        rating: 4.7,
        menu: {
          Soup: [
            {
              item: "Chicken Suki",
              item_th: "สุกี้ไก่",
              price: 80,
              description: "Tender chicken served in a flavorful suki broth with vegetables.",
              description_th: "ไก่เนื้อนุ่มในน้ำซุปสุกี้พร้อมผัก",
              imageUrl: rice,
            },
            {
              item: "Spicy Soup",
              item_th: "ซุปเผ็ด",
              price: 70,
              description: "A hot and spicy soup to warm your taste buds.",
              description_th: "ซุปเผ็ดร้อนเพื่อเพิ่มความอร่อย",
              imageUrl: rice,
            },
            {
              item: "Tom Yum Suki",
              item_th: "สุกี้ต้มยำ",
              price: 85,
              description: "Suki with a spicy and sour Tom Yum flavor.",
              description_th: "สุกี้รสชาติต้มยำเผ็ดเปรี้ยว",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Vegetable Suki",
              item_th: "สุกี้ผัก",
              price: 75,
              description: "A healthy mix of vegetables in suki sauce.",
              description_th: "สุกี้ผักเพื่อสุขภาพ",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Pork Suki",
              item_th: "สุกี้หมู",
              price: 80,
              description: "Savory pork in a light suki broth.",
              description_th: "หมูในน้ำซุปสุกี้อร่อย",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 2",
        res_type: "à la carte",
        rating: 4.5,
        menu: {
          Soup: [
            {
              item: "Pork Suki",
              item_th: "สุกี้หมู",
              price: 80,
              description: "Savory pork in a light suki broth.",
              description_th: "หมูในน้ำซุปสุกี้อร่อย",
              imageUrl: rice,
            },
            {
              item: "Seafood Suki",
              item_th: "สุกี้ทะเล",
              price: 90,
              description: "A suki dish with mixed seafood and fresh vegetables.",
              description_th: "สุกี้ทะเลพร้อมผักสด",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Chicken Noodle Soup",
              item_th: "ซุปก๋วยเตี๋ยวไก่",
              price: 70,
              description: "Comforting chicken noodle soup with herbs.",
              description_th: "ซุปก๋วยเตี๋ยวไก่ร้อนๆ พร้อมสมุนไพร",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Mixed Vegetable Suki",
              item_th: "สุกี้ผักรวม",
              price: 75,
              description: "A hearty suki with a variety of vegetables.",
              description_th: "สุกี้ที่เต็มไปด้วยผักหลายชนิด",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 3",
        res_type: "à la carte",
        rating: 4.8,
        menu: {
          Soup: [
            {
              item: "Beef Suki",
              item_th: "สุกี้เนื้อ",
              price: 90,
              description: "Tender beef slices in a rich suki broth.",
              description_th: "เนื้อวัวนุ่มในน้ำซุปสุกี้",
              imageUrl: rice,
            },
            {
              item: "Herbal Soup",
              item_th: "ซุปสมุนไพร",
              price: 60,
              description: "A light soup with a mix of herbs for added flavor.",
              description_th: "ซุปเบาที่มีสมุนไพรเพิ่มรสชาติ",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Spicy Seafood Suki",
              item_th: "สุกี้ทะเลรสเผ็ด",
              price: 100,
              description: "Seafood suki with a spicy kick.",
              description_th: "สุกี้ทะเลรสเผ็ด",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Clear Broth Suki",
              item_th: "สุกี้น้ำใส",
              price: 65,
              description: "Suki in a clear, light broth.",
              description_th: "สุกี้ในน้ำใสเบา",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 4",
        res_type: "à la carte",
        rating: 4.6,
        menu: {
          Soup: [
            {
              item: "Chicken Noodle Soup",
              item_th: "ซุปก๋วยเตี๋ยวไก่",
              price: 70,
              description: "Comforting chicken noodle soup with herbs.",
              description_th: "ซุปก๋วยเตี๋ยวไก่ร้อนๆ พร้อมสมุนไพร",
              imageUrl: rice,
            },
            {
              item: "Herbal Soup",
              item_th: "ซุปสมุนไพร",
              price: 60,
              description: "A light soup with a mix of herbs for added flavor.",
              description_th: "ซุปเบาที่มีสมุนไพรเพิ่มรสชาติ",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Vegetarian Suki",
              item_th: "สุกี้เจ",
              price: 65,
              description: "Vegetarian suki with a variety of vegetables.",
              description_th: "สุกี้ผักสำหรับคนกินเจ",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Fish Suki",
              item_th: "สุกี้ปลา",
              price: 90,
              description: "Fresh fish in suki broth with vegetables.",
              description_th: "ปลาสดในน้ำซุปสุกี้กับผัก",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 5",
        res_type: "à la carte",
        rating: 4.9,
        menu: {
          Soup: [
            {
              item: "Hot Pot",
              item_th: "หม้อไฟ",
              price: 85,
              description: "A communal hot pot with a variety of ingredients.",
              description_th: "หม้อไฟที่มีส่วนผสมหลากหลาย",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Vegetarian Suki",
              item_th: "สุกี้เจ",
              price: 65,
              description: "Vegetarian suki with a variety of vegetables.",
              description_th: "สุกี้ผักสำหรับคนกินเจ",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Fish Suki",
              item_th: "สุกี้ปลา",
              price: 90,
              description: "Fresh fish in suki broth with vegetables.",
              description_th: "ปลาสดในน้ำซุปสุกี้กับผัก",
              imageUrl: rice,
            },
          ],
        },
      },
    ];
    setTimeout(() => {
      setRestaurants(data);
      setLoading(false);
    }, 300);
  }); 

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.name === "Siam Brasserie 1"
  );

  if (loading) {
    return <div className="text-center text white">Loading...</div>;
  }

const handleFoodClick = (item) => {
    console.log(item); 
    setSelectedItem({ ...item, quantity: 1 });
};

const handleSelectLanguage = (eventKey) => {
    if (eventKey === "1") {
        setSelectedLanguage("English");
    } else if (eventKey === "2") {
        setSelectedLanguage("Thai");
    }
};

return (
    <div className="container-fluid">
        {selectedRestaurant ? 
            <div style={{marginTop:"20vw"}}> 
                <HeaderMenu/>
                <div className="card text-white" style={{ marginBottom: '6vw', marginTop: '6vw', background:"#01040F", borderRadius:"5vw" , padding:"1vw", marginRight:"1vw",marginLeft:"1vw"}}>
                    <div className="row d-flex align-items-center justify-content-around" style={{marginBottom: '3vw', marginTop:"2vw"}}>
                        <div className="col">
                            <img src={selectedRestaurant.pic} className="image-fluid rounded" style={{ width: "43vw", height: "auto", marginTop:"3vw" }} />
                        </div>
                        <div className="col">
                            <h1 className="mb-3" style={{ fontSize: '7vw' }}>{selectedRestaurant.name}</h1>
                            <p className="card-text text-white" style={{fontSize:"4vw"}}>
                                <i className="bi bi-star" style={{ color: 'yellow' }}></i> {selectedRestaurant.rating}
                            </p>
                            <Dropdown onSelect={handleSelectLanguage} style={{marginTop:"2vw"}}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{fontSize:"3.5vw", color:"black", fontWeight:600,background:"#4CF986"}}>
                                    <img 
                                        src={langIcon}
                                        alt="Language Icon" 
                                        style={{ width: "5vw", height: "5vw", marginRight: "1vw" }} 
                                    />
                                    {selectedLanguage}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="1">English</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Thai</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-end">
                    <button style={{fontSize:"3.5vw", fontWeight:600, padding:"1.5vw", background:"#4CF986", borderRadius:"2vw"}}>
                        Add New Menu
                    </button>
                </div>

                <ul className="container-fluid" style={{border: "none"}}>
                    {Object.entries(selectedRestaurant.menu).map(([category, items]) => (
                        <div key={category} className="col-12 text-white">
                            <div className="card-header" style={{border:"none"}}>
                                <h3 style={{fontSize: "6vw", color: "white", marginTop: "3vw", marginLeft:"1vw"}}>{category}</h3>
                            </div>
                            {items.map((item, index) => (
                                <li 
                                key={index} 
                                className="card d-flex justify-content-between align-items-start text-white"
                                style={{
                                    border:"none",
                                    marginBottom:"2 vw", 
                                    background:"none"
                                }} 
                                onClick={() => handleFoodClick(item)}
                                >
                                    <hr className="my-4" style={{
                                        borderTop: '2px solid grey', 
                                        width: '90vw', 
                                        position: 'relative', 
                                        left: '50%', 
                                        transform: 'translateX(-50%)' 
                                    }} />
                                    <div className="row" style={{marginBottom:"5vw"}}>
                                        <div className="col">
                                            <img src={item.imageUrl} alt="" style={{ width: "30vw", height: "auto" }} />
                                        </div>
                                        <div className="col" style={{ display: 'flex', flexDirection: 'column', marginTop:"4vw" }}>
                                            <div className="row">
                                                <p style={{ fontSize: "5vw", fontWeight: "600" }}>
                                                    {selectedLanguage === "English" ? item.item : item.item_th}
                                                </p>
                                                <div className="col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:"4vw" }}>
                                                    <span className="badge bg-success rounded-pill" style={{marginRight:"10vw", fontSize:"4vw"}}>{item.price} THB</span> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            </div>
        : null}
    </div>
    );
};


export default StallMenu;
