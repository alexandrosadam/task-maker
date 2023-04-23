import { useUIStore } from "@stores";
import { FC } from "react";

const Profile: FC = () => {
  const { userProfile } = useUIStore();

  return (
    <section>
      <h2>Profile settings</h2>
      <div>Name: {userProfile?.name}</div>
      <div>Role: {userProfile?.role}</div>
      <div>Email: {userProfile?.email}</div>
    </section>
  );
};

export default Profile;
