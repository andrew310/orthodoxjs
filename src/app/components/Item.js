// import stuff
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Item = ({comment}) => {
  <li style={{maxWidth: 450}}>
  <Card zDepth={0}>
    <CardHeader
      title={comment.name}
      subtitle={comment.body}
    />
  </Card>
  </li>
}


export default Item
