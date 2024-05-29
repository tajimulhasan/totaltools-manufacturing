import React from 'react';

const ManageUpdateModal = () => {
    return (
        <div>
              <input type="checkbox" id="profile-more-info" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box w-1/4">
          <p className="text-xl text-center">Update info</p>
          <form method="dialog">
             <label for="profile-more-info" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </label>
          </form>
          <form   className="info-fields">
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
              class="input input-bordered btn bg-primary w-full max-w-xs mt-3"
            />
          </form>
        </div>
      </div>
        </div>
    );
};

export default ManageUpdateModal;