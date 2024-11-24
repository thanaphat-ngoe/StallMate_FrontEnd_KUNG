import './ClientFavourite.css'
import '../App'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useClientAuth } from '../utilities/ClientAuthContext';
import axios from 'axios';
import CakeLogo from '../assets/cakedhome.png'
import SiamBrasserieLogo from '../assets/siam.png'

const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;

const Favourite = () => {
	const { authData } = useClientAuth();
	const [ isFavouriteData, setIsFavouriteData ] = useState(false);
	const [ favouriteData, setFavouriteData ] = useState(null);

	useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await axios.get(`${BACK_END_BASE_URL}/dashboard/customer/${authData.clientData.clientID}/favorite`, { withCredentials: true, headers: { "Cache-Control": "no-store", Pragma: "no-cache" } });
                if (response.status === 200 && response.data.favorites) {
                    setIsFavouriteData(true);
					setFavouriteData(response.data.favorites);
					console.log(response.data.favorites);
                } else {
                    setIsFavouriteData(false);
                }
            } catch (error) {
                setIsFavouriteData(false);
				console.log(error);
            }
        };
        dataFetch();
    }, []);

	const fav_stall = [{ img: CakeLogo, stall_name: "Cakes", rate: '4.7' }, { img: SiamBrasserieLogo, stall_name: "Siam Brasserie", rate: '4.7' }]

	if (isFavouriteData === false) {

        return(
            <div>
                <div className='back-but'>
                <Link to = '/clientHome'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </Link>
                </div>
                <div className='Fav-Head'>
                    <p>Favourites</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>
            </div>
        )
    }

    else {

        return(
        <div>
            <div className='back-but'>
            <Link to = '/clientHome'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </Link>
            </div>
            <div className='Fav-Head'>
                <p>Favourites</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>

            <div className='stall-shown'>
                {favouriteData.map((stall, index) => (
                <div className='details-shown'>
                    {stall.image && <img src={stall.image} alt={stall.name}/>}
                    {stall.name && <p key={index} id='name'>{stall.name}</p>}
                    {stall.rating.average && <p key={index} id='rate'>{stall.rating.average}</p>}
                </div>
                ))}
            </div>
        </div>
        )
    }
}

export default Favourite;