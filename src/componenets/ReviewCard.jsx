import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ userReview }) => {
  return (
    <div className="bg-white mt-10 text-gray-900 p-6 rounded-lg shadow-lg max-w-2xl w-full mx-auto border border-gray-300">
      <div className="flex items-center space-x-4">
        <img
          src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?w=740"
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
          loading="lazy"
        />
        <div>
          <h2 className="text-lg font-semibold">{userReview.reviewerName}</h2>
          <p className="text-sm text-gray-600">{userReview.reviewerEmail}</p>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400 flex text-lg">
            {[...Array(userReview.rating)].map((star) => (
              <FaStar key={Math.random()} />
            ))}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {userReview.date}
        </p>
      </div>
      <p className="mt-4 text-red-800 text-sm leading-relaxed">
      {userReview.comment}
      </p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <span>19 people found this helpful</span>
        <div className="flex space-x-4">
          <button className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300">
            Helpful
          </button>
          <button className="text-red-500 hover:underline">Report abuse</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;