import './DetailsList.scss';
import DetailsListItem from './DetailsListItem';

function DetailsList({ details }) {
  const {
    ip,
    location: { region, city, timezone },
    isp,
  } = details;
  const labels = ['IP Address', 'Location', 'Timezone', 'ISP'];

  return (
    <ul className='DetailsList'>
      <DetailsListItem label={labels[0]} value={ip} />
      <DetailsListItem label={labels[1]} value={region + ', ' + city} />
      <DetailsListItem label={labels[2]} value={'UTC ' + timezone} />
      <DetailsListItem label={labels[3]} value={isp} />
    </ul>
  );
}

export default DetailsList;
