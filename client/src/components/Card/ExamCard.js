import {
  Card,
  YoutubeCardContent,
  CardBody,
  AVideo,
  CardImage,
} from './ExamCard';
import { useRef } from 'react';
const getProductCard = props => {
  const [isFlipped, changeFlip] = useState(false);
  const cardRef = useRef({});

  return isFlipped ? (
    <>
      <Card>
        <CardBody
          ref={cardRef}
          disabled={cardRef}
          onClick={() => changeFlip(false)}
          role='contentInfo'
          aria-pressed='false'
          aria-label='Card with Youtube Title, click watch here to view.'
        >
          <YoutubeCardContent aria-label='description'>
            {props.description}
          </YoutubeCardContent>

          <YoutubeCardContent aria-label='videoOwnerChannelTitle'>
            {props.videoOwnerChannelTitle}
          </YoutubeCardContent>
          <CardImage src={props.url} href={props.href} />
          <AVideo aria-label='videoOwnerChannelTitle' href={props.videoId}>
            <b>Watch Here: </b>
          </AVideo>
        </CardBody>
      </Card>
    </>
  ) : (
    <Card key={i} ref={cardRef} onClick={() => changeFlip(true)}>
      <CardBody>
        <NameFieldset aria-label='title'>{props.title}</NameFieldset>
        <div
          role='contentInfo'
          aria-pressed='true'
          aria-label='Card with Youtube Title, click watch here to view.'
        >
          <CardImage
            src={props.url}
            href={`https://www.youtube.com/embed/${props.videoId}`}
          />
        </div>
      </CardBody>
    </Card>
  );
};
export default getProductCard;
