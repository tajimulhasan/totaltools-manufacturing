import React from 'react';

const ManageUpdateModal = () => {
    return (
        <div>
              <input type="checkbox" id="profile-more-info" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-1/4">
          <p className="text-xl text-center">Update info</p>
          <form method="dialog">
             <label for="profile-more-info" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </label>
          </form>
          <form   className="info-fields">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Education</span>
              </div>
              <input
                type="text"
                name="education"
                placeholder="Type your educational status.."
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label className="form-control w-full max-w-xs mt-1">
              <div className="label">
                <span className="label-text">Location (city/district)</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Your location.."
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label className="form-control w-full max-w-xs mt-1">
              <div className="label">
                <span className="label-text">Phone number</span>
              </div>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Add contact number.."
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label className="form-control w-full max-w-xs mt-1">
              <div className="label">
                <span className="label-text">LinkedIn profile link</span>
              </div>
              <input
                type="text"
                name="linkedIn"
                placeholder="Paste here your LinkedIn profile link.."
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <input
              type="submit"
              className="input input-bordered btn bg-primary w-full max-w-xs mt-3"
            />
          </form>
        </div>
      </div>
        </div>
    );
};

export default ManageUpdateModal;