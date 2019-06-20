const graphql = require('graphql')
const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList
} = graphql

const RepoType = new GraphQLObjectType({
  name: 'RepoType',
  fields: {
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    html_url: {
      type: GraphQLString
    },
    language: {
      type: GraphQLString
    },
    watcher_count: {
      type: GraphQLInt,
      resolve (parent, args) {
        return parent.watchers_count
      }
    },
    star_count: {
      type: GraphQLInt,
      resolve (parent, args) {
        return parent.stargazers_count
      }
    }
  }
})

const UserType = new GraphQLObjectType({
  name: 'UserSearchResultType',
  fields: {
    id: {
      type: GraphQLID
    },
    login: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    company: {
      type: GraphQLString
    },
    bio: {
      type: GraphQLString
    },
    avatar_url: {
      type: GraphQLString
    },
    following: {
      type: GraphQLInt
    },
    public_repos: {
      type: GraphQLInt,
      async resolve (parent, args, req) {
        const res = await request(parent.url, req)
        return res.data.public_repos
      }
    },
    followers: {
      type: GraphQLInt,
      async resolve (parent, args, req) {
        const res = await request(parent.url, req)
        return res.data.followers
      }
    },
    html_url: {
      type: GraphQLString
    },
    repos: {
      type: new GraphQLList(RepoType),
      args: {
        page: {
          type: GraphQLInt
        }
      },
      async resolve (parent, args, req) {
        const res = await request(`${parent.repos_url}?page=${args.page}`, req)
        return res.data
      }
    }
  }
})

const UserSearchType = new GraphQLObjectType({
  name: 'UserSearchType',
  description: '',
  fields: {
    total_count: {
      type: GraphQLInt
    },
    items: {
      type: new GraphQLList(UserType)
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root query',
  fields: {
    user_search: {
      type: UserSearchType,
      args: {
        name: {
          type: GraphQLString
        }
      },
      async resolve (parent, args, req) {
        const query = args.name
        const res = await request(
          `https://api.github.com/search/users?q=${query}`, req
        )
        return res.data
      }
    },
    user: {
      type: UserType,
      args: {
        name: {
          type: GraphQLString
        }
      },
      async resolve (parent, args, req) {
        const query = args.name
        const res = await request(`https://api.github.com/users/${query}`, req)
        return res.data
      }
    },
    user_repos: {
      type: new GraphQLList(RepoType),
      args: {
        name: {
          type: GraphQLString
        },
        page: {
          type: GraphQLInt
        }
      },
      async resolve (parent, args, req) {
        const name = args.name
        const page = args.page
        const res = await request(`https://api.github.com/users/${name}/repos?page=${page}`, req)
        return res.data
      }
    }
  }
})

const request = (url, req) => {
  const auth = req.headers.authorization ? req.headers.authorization : ''
  return axios.get(url, {
    headers: {
      Authorization: auth
    }
  })
}

module.exports = new GraphQLSchema({
  query: RootQuery
})
