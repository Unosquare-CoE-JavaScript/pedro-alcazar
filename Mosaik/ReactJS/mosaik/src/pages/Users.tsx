import React, { useEffect, useState } from "react";
import { Get } from "../services/api";
import { IUser } from "../models/user";
import { IConnection } from "../models/conection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const Users = () => {
    const [connection, setConnection] =  useState<IConnection>({code: 0});
    const [users, setUsers] = useState<IUser[] | null>(null);
    
    useEffect(() =>{
        const CheckConnection = async() =>{
            console.log("Checking connection...")
            setConnection(await Get("/"))
        }
        CheckConnection();
    },[])
    
    useEffect(() =>{
        const getData = async () => {
            console.log("Getting Data")
            setUsers(await Get('/users'));
        } 
        getData();
    },[]);


    if (users && connection){
        return (
            <>
                <div className="content py-1">
                    <div className="user-list">
                        <div className="border-left-orange users-title">
                            <h2>Users</h2>
                        </div>
                        <ul>
                            {users.map(user => {
                                let userDate = new Date(user.created_at)
                                let imgsource = '/images/' + user.id + ".jpeg"
                                return (
                                    <li key={user.id}>
                                        <div className="row justify-content-between">
                                            <img  src={imgsource} className="user-avatar" alt="" />
                                            <div className="">
                                                <p>{user.firstName} {user.lastName} <br />
                                                <span className="text-pharagrap">{user.username} </span> </p>
                                                <p className="text-orange"><FontAwesomeIcon icon={faCalendarDay}/> {userDate.toDateString()}</p>
                                            </div>
                                            <div className="text-pharagrap">
                                                <FontAwesomeIcon icon={faEdit} className="" /><FontAwesomeIcon icon={faTrash} className=""/>
                                            </div>
                                        </div>
                                        <hr />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className="content">
                    <div className="py-1">
                        Connection: {connection ? connection.code : "Disconected"} <br />
                        Users not found
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>
        )
    }
}
export default Users;