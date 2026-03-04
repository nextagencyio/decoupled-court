import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredResourcesTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Judges
export const GET_JUDGES = gql`
  query GetJudges($first: Int = 50) {
    nodeJudges(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeJudge {
          body {
            processed
          }
          position
          division {
            ... on TermInterface {
              id
              name
            }
          }
          chambers
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          appointedDate {
            timestamp
          }
        }
      }
    }
  }
`

export const GET_JUDGE_BY_PATH = gql`
  query GetJudgeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeJudge {
            id
            title
            path
            body {
              processed
            }
            position
            division {
              ... on TermInterface {
                id
                name
              }
            }
            chambers
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            appointedDate {
              timestamp
            }
          }
        }
      }
    }
  }
`

// Divisions
export const GET_DIVISIONS = gql`
  query GetDivisions($first: Int = 20) {
    nodeDivisions(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeDivision {
          body {
            processed
            summary
          }
          chiefJudge
          location
          phone
          divisionType {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_DIVISION_BY_PATH = gql`
  query GetDivisionByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeDivision {
            id
            title
            path
            body {
              processed
            }
            chiefJudge
            location
            phone
            divisionType {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Resources
export const GET_RESOURCES = gql`
  query GetResources($first: Int = 20) {
    nodeResources(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeResource {
          body {
            processed
            summary
          }
          resourceType {
            ... on TermInterface {
              id
              name
            }
          }
          fileUrl
          lastUpdated {
            timestamp
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_RESOURCE_BY_PATH = gql`
  query GetResourceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeResource {
            id
            title
            path
            body {
              processed
            }
            resourceType {
              ... on TermInterface {
                id
                name
              }
            }
            fileUrl
            lastUpdated {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeJudge {
            id
            title
            path
            body {
              processed
            }
            position
            division {
              ... on TermInterface {
                id
                name
              }
            }
            chambers
            phone
            appointedDate {
              timestamp
            }
          }
          ... on NodeDivision {
            id
            title
            path
            body {
              processed
            }
            chiefJudge
            location
            phone
            divisionType {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeResource {
            id
            title
            path
            body {
              processed
            }
            resourceType {
              ... on TermInterface {
                id
                name
              }
            }
            fileUrl
            lastUpdated {
              timestamp
            }
          }
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredResourcesTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured resources for homepage (limit to 3)
export const GET_FEATURED_RESOURCES = gql`
  query GetFeaturedResources {
    nodeResources(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeResource {
          resourceType {
            ... on TermInterface {
              id
              name
            }
          }
          lastUpdated {
            timestamp
          }
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            summary
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

// Featured judges for homepage
export const GET_FEATURED_JUDGES = gql`
  query GetFeaturedJudges {
    nodeJudges(first: 4, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeJudge {
          position
          division {
            ... on TermInterface {
              id
              name
            }
          }
          photo {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
