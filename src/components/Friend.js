import React from "react";

const Friend = ({ friend }) => {
  return (
    <div>
      {friend.name}{friend.email}
    </div>
  )
}

export default Friend;