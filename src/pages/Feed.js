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
        <div className="social-feed bg-gradient-to-br from-purple-900 to-blue-900 text-white px-6 py-6">
            <h2 className="text-3xl font-bold mb-4">Social Feed</h2>
            <div className="bg-gray-800 px-6 py-6">
                {/* Create Post Section */}
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
                        <div className="feed-header">
                            <div className="user-avatar"></div>
                            <div className="user-info">
                                <p className="user-name">{item.user}</p>
                                <p className="timestamp">{item.timestamp}</p>
                            </div>
                        </div>
                        <div className="feed-content">
                            <p>{item.content}</p>
                        </div>
                        <div className="feed-footer">
                            <div className="likes" onClick={() => handleLike(item.id)}>
                                <FaThumbsUp /> <span className="count">{item.likes}</span> Likes
                            </div>
                            <div className="comments">
                                <FaComment /> <span className="count">{item.comments}</span> Comments
                            </div>
                            <hr />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
