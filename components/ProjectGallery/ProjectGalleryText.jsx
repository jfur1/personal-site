import React, { useState, useEffect } from 'react'
import styles from '../../styles/work.module.scss'
import device from '../../components/Responsive.js'


let BlockTextReveal = (props) => {
  return(
    <span {...props}>
      {props.children}
    </span>
  )
}

const BlockTextRevealNoAnim = (props) => {
  return(
    <span  >
      {props.children}
    </span>
  )
}

const BlockTextRevealQuick = (props) => {
  return(
    <span 
      className={styles.textMask}
      style={{ display : `${props => (props.inline ? 'inline' : 'block')}` }}
    >
      {props.children}
    </span>
  )
}


const ProjectGalleryText = (props) => {
  const { number, projectName, projectDesc, projectType, roles, refreshToggle } = props
  const [refreshBlock, setRefreshBlock ] = useState(false)
  useEffect(() => {

    const refresh = (nextProps) => {
      const { refreshToggle } = nextProps;
      if (refreshToggle) {
        console.log('in refresh w props:', BlockTextReveal)
        BlockTextReveal = BlockTextRevealQuick;
        // BlockTextReveal = BlockTextRevealNoAnim;
        // setRefreshBlock(true),
        // () => {
        //   console.log('ajsdkfhlkajsdflhjadfhakjsdfhlkj')

        //   BlockTextReveal = BlockTextRevealQuick;
        //   setRefreshBlock(false);
        // }
      }
    }
    refresh(props)

    console.log("NEW PROJECT !!!!!!!!!!")
    

  }, [props.projectName])


  return (
    <section className={styles.textContainer}>

          <BlockTextReveal className={styles.textMask} refreshToggle={refreshToggle} inline={true}>
            <span key={number} className={styles.projectID}>{number}</span>
          </BlockTextReveal>
          
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
              <BlockTextReveal 
                className={styles.textMask}
                refreshToggle={refreshToggle} inline={true}>
                <span key={projectName} className={styles.projectName}>{projectName}</span>
              </BlockTextReveal>

              <BlockTextReveal className={styles.textMask} refreshToggle={refreshToggle} inline={true}>
                {roles.map((role, index, arr) => (index === arr.length - 1 ? (
                  <span className={styles.projectRole} key={number + '-' + role}>
                    {role}
                  </span>
                ) : (
                  <span className={styles.projectRole} key={number + '-' + role}>
                    {role}
                        &nbsp; • &nbsp;
                  </span>
                )))}
              </BlockTextReveal>
              
              <BlockTextReveal 
                  className={styles.textMask}
                  key={projectDesc}
                  refreshToggle={refreshToggle} inline={false}>
                <span className={styles.projectDesc} style={{ display : 'block' }} >{projectDesc}</span>
              </BlockTextReveal>
            </div>
        <BlockTextReveal className={styles.textMask} refreshToggle={refreshToggle} inline={true}>
          <span key={number + '-' + projectType} className={`${styles.projectType}` }>        
            {projectType}
          </span>
        </BlockTextReveal>
        </div>
    </section>
  )
}

export default ProjectGalleryText