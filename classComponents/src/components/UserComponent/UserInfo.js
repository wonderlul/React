import React from "react";

// class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"

const UserInfo = ({ user: { picture, name, email } }) => {
  const avatar = picture.large;
  const displayName = `${name.title} ${name.first} ${name.last}`;
  return (
    <div className="h-full flex flex-col items-center text-center">
      <img alt="team" className="rounded-lg w-6/12 mb-4" src={avatar} />
      <div className="w-full">
        <h2 className="title-font font-medium text-lg text-gray-900">
          {displayName}
        </h2>
        <h3 className="text-gray-500 mb-3">{email}</h3>
      </div>
    </div>
  );
};

export default UserInfo;
