import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OverviewWrapper, Title, Description } from './Styles';

export default function Overview({ icon, title, children }) {
  return (
    <OverviewWrapper>
        <div>
            <FontAwesomeIcon size='2xl' color='#f2545f' icon={icon} />
        </div>
        <Title>{title}</Title>
        <Description>{children}</Description>
    </OverviewWrapper>
  )
}
