import '../css/Card.css';

function Card({ image, header, description, link }) {
  const content = (
    <>
      {image ? (
        <img className='Image' src={image} alt={header}></img>
      ) : undefined}
      {header ? (
        <h2 className='Header'>{header}</h2>
      ) : undefined}
      {description ? (
        <p className='Body'>{description}</p>
      ) : undefined}
    </>
  );
  return (
    <div className='Card'>
      {link ? (
        <a href={link}>
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}

export default Card;