import styles from "../styles/Project.module.css";

export default function Project({
  imgUrl,
  marginDirection = null,
  title,
  description,
  imgWidth,
  flipped = false,
  gitLink,
  liveLink,
  alt
}) {
  let s = [styles.projectThumbnail];
  let w = [styles.projectWrapper];
  if (marginDirection === "left") {
    s.push(styles.marginLeftNeg50);
  } else if (marginDirection === "top") {
    s.push(styles.marginTopNeg100);
  } else if (marginDirection === "right") {
    s.push(styles.marginRightPos50);
  }

  if (flipped) {
    w.push(styles.flipLayout);
  }

  return (
    <>
      {
        imgUrl &&
          <article class={w.join(" ")}>
            <img alt={alt} src={imgUrl} class={s.join(" ")} style={{ width: imgWidth }} fetchpriority="high"/>
            <div class={styles.projectInfo}>
              <h2>{title}</h2>
              <span>{description}</span>
              <div class={styles.links}>
                {liveLink && (
                  <a href={liveLink} class={styles.liveLink} target="_blank">
                    LIVE
                  </a>
                )}
                {liveLink && gitLink && <>&nbsp;&nbsp;</>}
                {gitLink && (
                  <>
                    <a href={gitLink} class={styles.githubLink} target="_blank">
                      GITHUB
                    </a>
                  </>
                )}
              </div>
            </div>
          </article>
      }

    </>
  );
}
