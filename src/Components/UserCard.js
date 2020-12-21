import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-3">
      <img src={user.avatar_url} className="img-thumbnail" />
      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">Website: {user.blog}</div>
        <div className="text-primary">{user.bio}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
