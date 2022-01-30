import { ButtonCss } from '../styles/ButtonCss'

export default function Button({  title, width }) {
  return (
    <ButtonCss width={width}>    
        {title}
    </ButtonCss>
  )
}
