import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import boys from "../../images/boys.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import "./MyProfile.css";
import MyProfileInfoModal from "./MyProfileInfoModal";
import UpdateProfileModal from "./UpdateProfileModal";
import { ToastContainer } from "react-toastify";


const MyProfile = () => {
  const [myProfielInfo, setMyProfileInfo] = useState(null);
  const [UpdateProfielInfo, setUpdateProfileInfo] = useState(null);
  const [user, loading] = useAuthState(auth);
  const { data: profileInfo, isLoading, refetch} = useQuery(["profileInformation", user?.email], () =>
    fetch(`https://totaltools-manufacturing-server-site.onrender.com/profile/${user.email}`, {
        method: "GET",
    }).then((res) =>
      res.json()
    )
  );
  useEffect(() => {
    if (myProfielInfo === null && UpdateProfielInfo === null) {
      refetch();
    }
  }, [myProfielInfo, UpdateProfielInfo, refetch]);


  if (loading || isLoading) {
    return <Loading></Loading>;
  }


  return (
    <div>
      <h2 className="myProfile">My Profile</h2>
      <div className="your-profile">
        <div className="profie-image">
          <img className="outline outline-offset-0 outline-primary" src={user.photoURL === null ? boys : user.photoURL} alt="" />
        </div>
        <p className="displayName mt-1">{user.displayName}</p>
        <p className="text-center">{user.email}</p>

        {
           !profileInfo ?    

           ''
         : 
         <div className="info">
             <label className="form-control w-full max-w-xs mt-2">
           <div className="label  p-0">
             <span className="label-text">Education:</span>
           </div>
           <p className="text-slate-400">{profileInfo.education}</p>
           </label> 

            <label className="form-control w-full max-w-xs mt-2">
           <div className="label  p-0">
             <span className="label-text">Location(city/district):</span>
           </div>
           <p className="text-slate-400">{profileInfo.location}</p>
         </label> 
            <label className="form-control w-full max-w-xs mt-2">
           <div className="label  p-0">
             <span className="label-text">Contact no.: </span>
           </div>
           <p className="text-slate-400">{profileInfo.phoneNumber}</p>
         </label> 
            <label className="form-control w-full max-w-xs mt-2">
           <div className="label  p-0">
             <span className="label-text">LinkedIn:</span>
           </div>
           <p className="text-slate-400">{profileInfo.linkedIn}</p>
         </label> 
           </div>
           }
      <label
            disabled={profileInfo}
             htmlFor="profile-more-info"
             onClick={() => setMyProfileInfo(user)}
             className="btn btn-sm mt-3 mb-1 w-full"
           >
             Add more Info +
           </label>
          
      {
        profileInfo ?
        <label
        htmlFor="profile-more-info"
        onClick={() => setUpdateProfileInfo(user)}
        className="btn btn-sm mt-2 mb-1 w-full"
      >
       Edit
      </label>
      :
      ''
      }
      </div>
      {myProfielInfo && (
        <MyProfileInfoModal setMyProfileInfo={setMyProfileInfo} refetch={refetch} />
      )}

      {UpdateProfielInfo && (
        <UpdateProfileModal  setUpdateProfileInfo={setUpdateProfileInfo} profileInfo={profileInfo} refetch={refetch} UpdateProfielInfo={UpdateProfielInfo}/>
      )}
      <ToastContainer/>
    </div>
  );
};

export default MyProfile;
