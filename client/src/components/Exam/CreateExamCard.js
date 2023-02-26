import { Card, YoutubeCardContent, CardBody, AVideo, CardImage } from './index';
import { useRef } from 'react';
const getProductCard = props => {
  const [card, flipCard] = useState(false);
  const cardRef = useRef({});

  return card ? (
    <>
      <Card>
        <CardBody
          ref={cardRef}
          disabled={cardRef}
          onClick={() => flipCard(false)}
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
    <Card key={i} ref={cardRef} onClick={() => flipCard(true)}>
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
