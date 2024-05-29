import React from "react";
import './MyProfileInfoModal.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
const MyProfileInfoModal = ({setMyProfileInfo, refetch}) => {
    const [user] = useAuthState(auth);


    const handleAddInfoSubmit = (e) =>{
       e.preventDefault();
       const education = e.target.education.value;
       const location = e.target.location.value;
       const phoneNumber = e.target.phoneNumber.value;
       const linkedIn = e.target.linkedIn.value;
       const email = user.email;
        const data = {email, education, location, phoneNumber, linkedIn};

        const url = 'http://localhost:5000/profile';
        fetch(url, {
            method: "POST",
             headers: {
                "content-type": "application/json"
             },
             body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success("Added successfully!");
            }
            else{
                toast.error("Failed. Try again")
            }
   
            e.target.reset();
            refetch();
            setMyProfileInfo(null)
        })


    }
  return (
    <div className="add-info-parent">
      <input type="checkbox" id="profile-more-info" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box w-1/3">
          <p className="text-xl text-center">Add info</p>
          <form method="dialog">
             <label for="profile-more-info" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </label>
          </form>
          <form  onSubmit={handleAddInfoSubmit} className="info-fields">
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Education</span>
              </div>
              <input
                type="text"
                name="education"
                placeholder="Type your educational status.."
                class="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label class="form-control w-full max-w-xs mt-1">
              <div class="label">
                <span class="label-text">Location (city/district)</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Your location.."
                class="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label class="form-control w-full max-w-xs mt-1">
              <div class="label">
                <span class="label-text">Phone number</span>
              </div>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Add contact number.."
                class="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label class="form-control w-full max-w-xs mt-1">
              <div class="label">
                <span class="label-text">LinkedIn profile link</span>
              </div>
              <input
                type="text"
                name="linkedIn"
                placeholder="Paste here your LinkedIn profile link.."
                class="input input-bordered w-full max-w-xs"
              />
            </label>
            <input
              type="submit"
              value="Add info+"
              class="input input-bordered btn bg-primary w-full max-w-xs mt-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfileInfoModal;
