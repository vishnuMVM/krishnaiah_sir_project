import React from 'react';
import UpdateVideos from './UpdateVideos';
import UploadImage from './UploadImage';
import { useAuth } from '../firebase/config';
import PostUpdatesDiv from './LatestUpdatesDiv/PostUpdatesDiv';

export default function UpdateImagesAndVideos (){
  const currentUser = useAuth()

  return(

    <div>
      {currentUser && <UploadImage />}
      {currentUser && <UpdateVideos />}
      {currentUser && <PostUpdatesDiv />}
    </div>

  )

}