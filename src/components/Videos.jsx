import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,index) => {
        return (
        <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />  } {  /*  Eğer responsta video id varsa video card renderla yoksa channelcard*/}
            {item.id.channelId && <ChannelCard channelDetail={item} />} 
        </Box>)
      })}
    </Stack>
  );
};
export default Videos;
