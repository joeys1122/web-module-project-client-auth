import React from "react";

const Friend = ({ friend }) => {
  return (
    <p>
      -{friend.name} -{friend.email}
    </p>
  )
}

export default Friend;