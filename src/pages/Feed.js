import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

const Feed = () => {
    const [newPostContent, setNewPostContent] = useState('');
    const [feedItems, setFeedItems] = useState([
        {
            id: 1,
            user: 'John Doe',
            timestamp: '2 hours ago',
            content: 'Just planted some beautiful flowers in my garden. Loving the vibrant colors!',
            likes: 12,
            comments: 5,
        },
        {
            id: 2,
            user: 'Jane Smith',
            timestamp: '5 hours ago',
            content: 'Harvested my first batch of tomatoes today. They taste amazing!',
            likes: 24,
            comments: 8,
        },
        {
            id: 3,
            user: 'Mike Johnson',
            timestamp: '1 day ago',
            content: 'Had a great time volunteering at the local community garden. We accomplished so much together!',
            likes: 45,
            comments: 15,
        },
        {
            id: 4,
            user: 'Mike Johnson',
            timestamp: '2 days ago',
            content: 'Volunteering at the local community garden.',
            likes: 45,
            comments: 15,
        },
    ]);

    const handleNewPostChange = (e) => {
        setNewPostContent(e.target.value);
    };

    const handleCreatePost = () => {
        if (newPostContent.trim() === '') return;

        const newPost = {
            id: feedItems.length + 1,
            user: 'Your Name', // Assuming user's name is dynamic
            timestamp: 'Just now',
            content: newPostContent,
            likes: 0,
            comments: 0,
        };

        setFeedItems([newPost, ...feedItems]);
        setNewPostContent('');
    };

    const handleLike = (postId) => {
        const updatedFeedItems = feedItems.map((item) => {
            if (item.id === postId) {
                return { ...item, likes: item.likes + 1 };
            }
            return item;
        });

        setFeedItems(updatedFeedItems);
    };

    return (
        <div className="social-feed bg-gradient-to-r from-color4 to-color1  text-white px-6 py-6">
            <h2 className="text-3xl font-bold mb-4 text-yellow-300 text-[32px]">Garden of Conversations: A Social Feed for Green Enthusiasts🌿🌻🌺
            </h2>
            <p>
                Join Our Green Oasis:
                Dive into the Garden of Conversations and immerse yourself in a world where every post is a budding opportunity for connection and inspiration. Whether you're a seasoned gardener or just starting out, everyone is welcome to share, learn, and grow together in this verdant oasis of online conversation.
                So grab your gardening gloves and dive into the Garden of Conversations – where every interaction plants a seed of connection and every post adds a leaf to our flourishing community!
            </p>
            <div className=" px-6 py-6">
                <div className="mb-4">
                    <textarea
                        value={newPostContent}
                        onChange={handleNewPostChange}
                        placeholder="What's on your mind?"
                        className="w-full p-2 rounded-md resize-none bg-gray-700 text-white"
                    ></textarea>
                    <button onClick={handleCreatePost} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-2">
                        Post
                    </button>
                </div>
                {/* Feed Items */}
                {feedItems.map((item) => (
                    <div className="feed-item" key={item.id}>
                        <div className="feed-box bg-gray-900 rounded-lg p-4 mb-4">
                            <div className="feed-header flex items-center mb-2">
                                <div className="user-avatar bg-white rounded-full mr-2"></div>
                                <div className="user-info">
                                    <p className="user-name">{item.user}</p>
                                    <p className="timestamp text-gray-400">{item.timestamp}</p>
                                </div>
                            </div>
                            <div className="feed-content mb-2">
                                <p>{item.content}</p>
                            </div>
                            <div className="feed-actions flex justify-between">
                                <div className="likes" onClick={() => handleLike(item.id)}>
                                    <FaThumbsUp className="text-blue-500 cursor-pointer mr-1" /> <span className="count">{item.likes}</span> Likes
                                </div>
                                <div className="comments">
                                    <FaComment className="text-gray-400 mr-1" /> <span className="count">{item.comments}</span> Comments
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
