import { toast } from "react-toastify";
const UpdateProfileModal = ({
  setUpdateProfileInfo,
  UpdateProfielInfo,
  refetch,
}) => {
  const handleUpdateInfoSubmit = (event) => {
    event.preventDefault();
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phoneNumber = event.target.phoneNumber.value;
    const linkedIn = event.target.linkedIn.value;
    const email = UpdateProfielInfo.email;
    const data = { education, location, phoneNumber, linkedIn };
    const url = `http://localhost:5000/profile/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Updated successfully!");
          refetch();
          setUpdateProfileInfo(null);
        }
      });
  };
  return (
    <div className="add-info-parent">
      <input type="checkbox" id="profile-more-info" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box myProfileAnd-update-modal-width-common">
          <p className="text-xl text-center">Update info</p>
          <form method="dialog">
            <label
              for="profile-more-info"
              class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </form>
          <form onSubmit={handleUpdateInfoSubmit} className="info-fields">
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

export default UpdateProfileModal;
