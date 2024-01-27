import MyProfileForm from '@/components/MyProfileForm'
import { getServerSession } from 'next-auth';
import React from 'react'

const MyProfile = async () => {
  const session = await getServerSession();
  console.log(session,"session session session");
  return (
    <div>My Profile

        <MyProfileForm />
    </div>
  )
}

export default MyProfile 