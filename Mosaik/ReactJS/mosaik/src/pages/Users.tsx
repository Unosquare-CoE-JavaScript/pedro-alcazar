import React, { useEffect, useState } from "react";
import { Get } from "../services/api";
import { IUser } from "../models/user";
import { IConnection } from "../models/conection";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import VerticalBar from "../components/VerticalBar";

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
            console.log("Getting Users Data")
            setUsers(await Get('/users'))
        } 
        getData();
    },[]);


    if (users){
        console.log(users);
        return (
            <>
                <div className="content py-1">
                <div className="row">
                    <div className="col-4">
                        <VerticalBar />
                    </div>
                    <div className="col-8">
                        Connection: {connection ? connection.code : "Disconected"}
                        <h2 className="subtitle-product">Users</h2>
                        <div className="user-list border">
                            <ul>
                                {users.map(user => {
                                    let userDate = new Date(user.created_at)
                                    let imgsource = '/images/' + user.id + ".jpeg"
                                    return (
                                        <li key={user.id} className="border-bottom">
                                            <div className="row justify-content-between">
                                                <img  src={imgsource} className="user-avatar" alt="" />
                                                <div className="">
                                                    <p>{user.firstName} {user.lastName} <br />
                                                    <small className="text-pharagrap">{user.username}</small> </p>
                                                    <p className="text-orange"><FontAwesomeIcon icon={faCalendarDay}/> {userDate.toDateString()}</p>
                                                </div>
                                                <div className="text-pharagrap">
                                                    <FontAwesomeIcon icon={faEdit} className="" /><FontAwesomeIcon icon={faTrash} className=""/>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
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