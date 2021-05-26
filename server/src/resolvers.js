const resolvers = {
    Query : {
        // Returns an array of tracks that will be used to populate
        // the homepage grid of our webclient
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }    
    }
}

module.exports = resolvers;
