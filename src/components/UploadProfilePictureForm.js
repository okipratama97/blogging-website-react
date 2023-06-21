// Upload Profile Picture form

import React from 'react';

const UploadProfilePictureForm = () => {
  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    // Perform upload profile picture logic
    console.log('Upload profile picture');
  };

  return (
    <div>
      <h2>Upload Profile Picture</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default UploadProfilePictureForm;
