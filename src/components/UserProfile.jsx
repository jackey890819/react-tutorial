import PropTypes from "prop-types";
import { UserUsername } from "./UserUsername";
import { UserFavoriteFoods } from "./UserFavoriteFoods";

export function UserProfile(props) {
  props.callMe();
  return (
    <div id="user-profile">
      <UserUsername username={props.username} />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFavoriteFoods />
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  favoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};
