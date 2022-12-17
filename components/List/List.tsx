type Props = {
  items: string[]
}

const List = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default List
