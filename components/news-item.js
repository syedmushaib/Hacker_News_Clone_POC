import cn from 'classnames';
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
        <div className={styles.left_item}>
          <span className={styles.no_comments}>
            {num_comments}
          </span>

          <span 
            className={cn({
              [styles.chocolate]: points > 100,
              [styles.orange]: points < 100
            })}
          >
            {points}
          </span>

          <span className={styles.upvote_act}
            onClick={() => updateVote(title)}>
          </span>
        </div>
        
        <div className={styles.right_item}>
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
        

    </div> 
    )} 
    </>
  )
}

export default NewsItems;