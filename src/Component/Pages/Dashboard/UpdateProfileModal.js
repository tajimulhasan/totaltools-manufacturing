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
    const url = `https://totaltools-manufacturing.vercel.app/profile/${email}`;
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
      <input type="checkbox" id="profile-more-info" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box myProfileAnd-update-modal-width-common">
          <p className="text-xl text-center">Update info</p>
          <form method="dialog">
            <label
              for="profile-more-info"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </form>
          <form onSubmit={handleUpdateInfoSubmit} className="info-fields">
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

export default UpdateProfileModal;
