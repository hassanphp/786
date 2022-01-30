import { Card } from '../styles/Card'

export default function CardLayout({  id, title, body }) {
  return (
    <Card layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        {/* <img src={`./images/${image}`} alt='' /> */}
      </div>
    </Card>
  )
}
