import React, { useContext } from "react";
import { SocialAccountContext } from "../Contexts/SocialAccountContext";

const SocialAccount = () => {
  const { socialAccounts } = useContext(SocialAccountContext);

  return (
      <div className="social-icons">
        {
        socialAccounts.map(account =>  <a className="social-icon" href={`${account?.webUrl}/${account?.username}`} key={account?.id} target='_blank'><i className={account?.icon} /></a>)
        }
      </div>
  );
};

export default SocialAccount;
