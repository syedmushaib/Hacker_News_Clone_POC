import styles from './newsItems.module.css';
import { getHostnameFromRegex, dateFormate } from '../libs/utils';

function NewsItems (props) {
  const {
    title,
    url,
    num_comments,
    points,
    author,
    created_at,
    hideFn,
    updateVote
  } = props;

  let shouldShow = title && url && num_comments && points && author && created_at;

  return (
    <>
    {shouldShow && (
      <div className={styles.item}>

        <span className={styles.no_comments}>
          {num_comments}
        </span>

        <span className="updates">
          {points}
        </span>

        <span className={styles.upvote_act}
          onClick={() => updateVote(title)}>
        </span>

        <span className="title">{title} </span>

        <a href={url} target="blank" 
          className={styles.link}>
          {`(${getHostnameFromRegex(url)})`}
        </a>

        <span className={styles.copy}> by </span> 
        <span className={styles.author}> {author}</span>
        <span className={styles.created}> {dateFormate(created_at)} </span>

        <span 
          onClick={() => hideFn(title)} className={styles.hide_act}> 
            [hide]
        </span>

    </div> 
    )} 
    </>
  )
}

export default NewsItems;