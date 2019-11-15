import React from "react";

const Avatar = props => {
  return (
    <div>
      <img
        alt="biroliro"
        className="avatar"
        id="Bolsoroleta"
        ref={props.avatar}
        src="/img/biru5.jpg"
      />
    </div>
  );
};

export default React.memo(Avatar);
