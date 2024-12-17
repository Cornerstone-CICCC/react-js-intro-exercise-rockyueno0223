import { User } from "../App"

type Props = {
  user: User,
}

export const Info = ({user}: Props) => {
  return (
    <div>
      Name: {user.firstname} {user.lastname}, Age: {user.age}, Is student: {user.isStudent ? "Yes" : "No"}
    </div>
  )
}
