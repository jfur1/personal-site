import React, { useState, useEffect } from 'react'
import styles from '../../styles/work.module.scss'
import device from '../../components/Responsive.js'

const ProjectGalleryText = (props) => {
  const { number, projectName, projectDesc, projectType, roles, refreshToggle } = props
  const [refreshBlock, setRefreshBlock ] = useState(false)

  console.log("PROPS:",props)

  const moveUp = init => keyframes`
    0%{
        transform: translateY(${init}px);
    }
    100%{
        transform: translateY(0px);
    }
  `;

  useEffect(() => {
    refresh(props)
  }, [props])

  let BlockTextReveal = (props) => {
    return(
      <span {...props}>
        {props.children}
      </span>
    )
  }

  const BlockTextRevealNoAnim = (props) => {
    return(
      <span {...props}>
        {props.children}
      </span>
    )
  }

  const BlockTextRevealQuick = (props) => {
    return(
      <span className={styles.textReveal}
        display={`${props => (props.inline ? 'inline' : 'block')}`}
      >
        {props.children}
      </span>
    )
  }

  const refresh = (nextProps) => {
    const { refreshToggle } = nextProps;
    if (refreshToggle) {
      console.log('in refresh w props:', BlockTextReveal)
      BlockTextReveal = BlockTextRevealNoAnim;
      setRefreshBlock(true),
      () => {
        BlockTextReveal = BlockTextRevealQuick;
        setRefreshBlock(false);
      }
    }
  }

  return (
    <section className={styles.textContainer}>
        <div className={styles.projectID}>
          <BlockTextReveal refreshToggle={refreshToggle} inline>
            {number}
          </BlockTextReveal>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div className={styles.projectName}>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {projectName}
              </BlockTextReveal>
            </div>
            <div className={styles.projectRole}>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {roles.map((role, index, arr) => (index === arr.length - 1 ? (
                  <span key={role}>
                    {role}
                  </span>
                ) : (
                  <span key={role}>
                    {role}
                        &nbsp; • &nbsp;
                  </span>
                )))}
              </BlockTextReveal>
            </div>
            <div className={styles.projectDesc}>
              <BlockTextReveal refreshToggle={refreshToggle} inline={false}>
                {projectDesc}
              </BlockTextReveal>
            </div>
          </div>

        <div className={styles.projectType}>
          <BlockTextReveal refreshToggle={refreshToggle} inline>
            {projectType}
          </BlockTextReveal>
        </div>

      </div>
    </section>
  )
}

export default ProjectGalleryText