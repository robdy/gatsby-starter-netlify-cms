import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import * as styles from'../components/partner.modules.sass'

export const PartnerPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className={`${styles.section} ${styles.sectionGradient}`}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PartnerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PartnerPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PartnerPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PartnerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PartnerPage

export const partnerPageQuery = graphql`
  query PartnerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
