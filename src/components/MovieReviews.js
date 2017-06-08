import React from 'react'

export default ({ reviews }) => {
  return <div className="review-list">{reviews.map(review => <div className='review'>{review.headline}</div>)}</div>
}

// const Book = ({ title, img_url }) => {
//   return (
//     <div className="book">
//       <img src={img_url} />
//       <h3>{title}</h3>
//     </div>
//   )
// }
//
// const BookList = ({ books }) => (
//   <div className="book-list">
//     {books.map(book => <Book title="book.title" img_url="book.image_url" />)}
//   </div>
// );
//
//
// ?api-key=47d3a71b971d4315ac3b827f0c729493
