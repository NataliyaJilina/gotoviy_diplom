import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../../store/store"; 
import Loader from "../../components/UI/Loader/Loader"; 
import { changeUser } from '../../store/slices/UserSlice';
import { SCProfilePage } from './ProfilePage.styled'; 
import { Header } from "../../components/UI/Header/Header"; 


import profilePhoto from '../../../public/img/profile_photo.jpg';




export const ProfilePage = () => {
    const [isLoading, setIsLoading] = useState(true); 
    const user = useSelector((state: RootState) => state.userSlice.user);
    const dispatch = useDispatch();

    useEffect(() => {
       
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 1000);

        
        return () => clearTimeout(timer);
    }, []); 

   
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            
            dispatch(changeUser(parsedUser)); 
        }
    }, []);

    return(
        <div>
            <Header /> 
            <SCProfilePage> 
                {isLoading ? ( 
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Loader />
                    </div>
                ) : (
                    <div className="profileCard"> {/* Применяем стили к profileCard */}
                        <img src={profilePhoto} alt="Profile" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
                        <h1>Name: {user?.name}</h1>
                        <h1>Email: {user?.mail}</h1>
                        <h1>Number Phone: {user?.phone_number}</h1>
                        <h1>Rank: {user?.user_id}</h1>
                        <h1>City: {user?.city}</h1>
                    </div>
                )}
            </SCProfilePage>
        </div>
    );
}
