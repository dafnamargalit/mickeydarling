import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const VideoWrap = styled.div`
    position: relative;
    width: 100vw;
    padding-bottom: 56.25%;
`

const YoutubeEmbed = ({ embedId }) => (
  <VideoWrap>
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "10px"
      }}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoWrap>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;