import './DetailsListItem.scss';

function DetailsListItem({ label, value }) {
  return (
    <li className='DetailsListItem'>
      <span className='DetailsListItem__label'>{label}</span>
      <span className='DetailsListItem__value'>{value}</span>
    </li>
  );
}

export default DetailsListItem;
