type Props = {
  message: string,
}

export const Welcome = ({message}: Props) => {
  return (
    <p>{message}</p>
  )
}
