'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () =>
{
    const { data: session } = useSession()
    const [myPosts, setMyPosts] = useState([])
    const router = useRouter()

    const handleDelete = async (post) =>
    {
        const hasConfirmed = confirm('Do You Really Want to Delete This Post?')

        if (hasConfirmed)
        {
            try
            {
                await fetch(`/api/prompt/${post._id.toString()}, {
                    method : "DELETE"
                }`)

                const fiteredPosts = myPosts.filter((p) => p._id !== post._id)

                setMyPosts(fiteredPosts)
            } catch (error)
            {
                console.log(error)
            }
        }
    }

    const handleEdit = (post) =>
    {
        router.push(`/update-prompt?id=${post._id}`)
    }

    useEffect(() =>
    {
        const fetchPosts = async () =>
        {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setMyPosts(data);
        };

        if (session?.user.id) fetchPosts();
    }, [session?.user.id]);

    return (
        <div>
            <Profile
                name="My"
                desc="Welcome to your personalised profile page.Share your exceptional prompts and inspire others with the power of your imagination"
                data={myPosts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default MyProfile
