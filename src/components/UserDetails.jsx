import PropTypes from "prop-types";

export function UserDetails(props) {
  return (
    <div key={props.user.id}>
      <b>ID: </b>
      <span>{props.user.id}</span>
      <b>Username: </b>
      <span>{props.user.username}</span>
      <br />
      <b>Email: </b>
      <span>{props.user.email}</span>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  trysomething: [PropTypes.number],
};
