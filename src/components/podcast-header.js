import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// const playlist = ({data}) => {
//     {data.allBuzzsproutPodcastEpisode.edges.map(({ node }) => (
//         <span key={node.id}>
//             <h3><small>Episode #{node.episode_number}</small><br />
//             {node.title}
//             </h3>{node.audio_url}
//             layout="horizontal-reverse"
//             customAdditionalControls={[]}
// />
//         </span>
//         ))}
//     }


const PodcastStuff = () => {
    return (
        <StaticQuery
            query={graphql`
        query {
          allBuzzsproutPodcastEpisode(filter: {private: {eq: false}}, limit: 1, sort: {order: DESC, fields: episode_number}) {
            edges {
              node {
                id
                title
                audio_url
                episode_number
                summary
              }
            }
          }
        }

      `}
            render={data => (
                <div className="podcast-header">
                    {data.allBuzzsproutPodcastEpisode.edges.map(({ node }) => (
                        <span key={node.id}>
                            <h3>Latest episode: <strong>{node.title}</strong></h3>
                            <p>
                                <AudioPlayer
                                    src={node.audio_url}
                                    layout="horizontal-reverse"
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                />
                            </p>
                        </span>
                    ))}
                </div>
            )}
        />
    )
}

export default PodcastStuff