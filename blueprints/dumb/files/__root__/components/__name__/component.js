import React from 'react'
import styles from './styles.css'

function <%= pascalEntityName %> ({
  title = '<%= pascalEntityName %>'
}) {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default <%= pascalEntityName %>