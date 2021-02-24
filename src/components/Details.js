import './Details.scss';
import DetailsList from './DetailsList';

function Details({ details }) {
  return (
    <div className='Details'>
      {details ? <DetailsList details={details} /> : 'Loading...'}
    </div>
  );
}

export default Details;
