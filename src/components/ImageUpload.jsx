import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../files/AuthContext'
const ImageUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    // message to display upload status
    const [msg, setMsg] = useState('Waiting to upload image...');
    const {user, setProfile, profile} = useContext(AuthContext);
    // when file input changes, set image state
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    }
        // handle form submission to upload image
    const handleSubmit = async (e) => {
        // check if logged in
        if (!user || !user.id) {
            setMsg('User not logged in');
            return;
        }
        // don't refresh the page
        e.preventDefault();
        // show that upload is in progress
        setUploading(true);
        // used to send files through HTTP, sends image file
        const formData = new FormData();
        formData.append('image', image);
        
        try {
            // sends request to backend to upload image
            const response = await fetch(`https://users-api-m07a.onrender.com/users/${user.id}/uploadavatar`, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });
            // if response not ok, throw error
            if (!response.ok) {     
                throw new Error('Network response was not ok');
            }
            // parse response data
            const data = await response.json();
            // update profile with new image url
            console.log(data.avatar_url);
            setProfile({...profile, img_url: data.avatar_url});
            // set success message
            setMsg(data.message);
        }catch (error) {
            console.error('Error uploading image:', error);
            setMsg('Error uploading image');
        } finally {
            setUploading(false);
        }
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="file" id="imageUpload" name="image" accept="image/*" onChange={handleFileChange}/>
        <button type="submit" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
        </form>
        <p>{msg}</p>
        </div>
  )
}

export default ImageUpload