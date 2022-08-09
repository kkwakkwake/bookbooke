const StarItem = ({ star_id, star_img, onClick }) => {
  return (
    <div onClick={() => onClick(star_id)}>
      <img src={star_img} alt='ratingStars' />
    </div>
  )
}

export default StarItem;