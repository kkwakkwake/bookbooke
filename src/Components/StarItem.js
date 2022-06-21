const StarItem = ({ star_id, star_img, onClick }) => {
  return <div className='StarItem' onClick={() => onClick(star_id)}>
    <img src={star_img} />
  </div>
}

export default StarItem;