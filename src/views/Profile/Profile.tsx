import { getUserInfo } from "@api/user";
import { queryKeys } from "@constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const Profile: FC = () => {
  const { data: userInfo } = useQuery([queryKeys.user.profile], () => getUserInfo());

  return (
    <section>
      <h2>Profile settings</h2>
      <div>Name: {userInfo?.name}</div>
      <div>Role: {userInfo?.role}</div>
      <div>Email: {userInfo?.email}</div>
    </section>
  );
};

export default Profile;
