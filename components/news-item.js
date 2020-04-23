function NewsItems (props) {
  const { title, url, num_comments, points, author, created_at } = props;
  return (
    <div className="item">
        <span className="no_comments">{num_comments}</span>
        <span className="updates">{points}</span>
        <span className="upvote_act"></span>
        <span className="title">{title}</span>
        <span className="link">{url}</span> by sdsdsds
        <span className="author">{author}</span>
        <span className="created">{created_at}</span>
        <span className="hide_act">[hide]</span>
    </div> 
  )
}

export default NewsItems;