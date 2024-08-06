import { MockedProvider } from '@apollo/client/testing'
import AnimeSingle, { GET_ANIME_SINGLE } from '../../src/screen/AnimeSingle.jsx'

const dummyData = {
  "data": {
    "Media": {
      "title": {
        "english": "Cowboy Bebop",
        "native": "\u30ab\u30a6\u30dc\u30fc\u30a4\u30d3\u30d0\u30c3\u30d7",
        "__typename": "MediaTitle"
      },
      "duration": 24,
      "genres": [
        "Action",
        "Adventure",
        "Drama",
        "Sci-Fi"
      ],
      "description": "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
      "bannerImage": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/banner\/1-OquNCNB6srGe.jpg",
      "coverImage": {
        "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx1-CXtrrkMpJ8Zq.png",
        "__typename": "MediaCoverImage"
      },
      "__typename": "Media"
    }
  }
}

const mock = {
  delay: 30,
  request: {
    query: GET_ANIME_SINGLE,
    // variables: { "mediaId": "1" }
  },
  result: dummyData
}


describe('AnimeSingle.cy.jsx', () => {
  it('playground', () => {
    cy.mount(
      <MockedProvider mocks={[mock]}>
        <AnimeSingle />
      </MockedProvider>
    )

    cy.contains("Loading...")
    cy.contains("Cowboy Bebop")

  })

})