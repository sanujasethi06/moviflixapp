import styles from "@/app/styles/common.module.css"
import Image from "next/image"
import Link from "next/link"

const placeHolderImage = "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYmE41JCb_Kn_QJQ2HxOqaEehsylehX71KhSzpkPCUjRR7n0mhDwulrJ1XHReio5ni-rgjEwf8kQHOBR7LXhl1wwl236u0Gx5ar6.webp?r=317"
const MovieCard = (currEle) => {
    const { id,type,title,synopsis } = currEle.jawSummary
  return (
    <>
          <div className={styles.card}>
              <div className={styles.card_image}>
                  <Image src={currEle.jawSummary.backgroundImage.url ? currEle.jawSummary.backgroundImage.url : placeHolderImage} alt={title} width={270} height={270}/>
              </div>
              <div className={styles.card_data}>
                  <h2>{title.substring(0,18)}</h2>
                  <p>
                      {`${synopsis.substring(0,66)}...`}
                  </p>
                  <Link href={`/movie/${id}`}>
                      <button>
                            Read More
                      </button>
                  </Link>
              </div>
     </div>
    </>
  )
}

export default MovieCard    
