import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../files/AuthContext'
const ImageUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    const [msg, setMsg] = useState('Waiting to upload image...');
    const {user, setProfile, profile} = useContext(AuthContext);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    }
    const handleSubmit = async (e) => {
        if (!user || !user.id) {
            setMsg('User not logged in');
            return;
        }
        e.preventDefault();
        setUploading(true);

        const formData = new FormData();
        formData.append('image', image);
        
        try {
            const response = await fetch(`https://users-api-m07a.onrender.com/users/${user.id}/uploadavatar`, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });
            if (!response.ok) {     
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProfile({...profile, img_url: data.url});
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