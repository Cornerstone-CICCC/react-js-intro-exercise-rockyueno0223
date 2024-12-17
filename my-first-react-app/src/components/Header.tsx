type Props = {
  logoText: string,
}

export const Header = ({logoText}: Props) => {
  return (
    <h1>{logoText}</h1>
  )
}
