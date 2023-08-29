import { useContext } from 'react';

// Third party
import InfiniteScroll from 'react-infinite-scroller';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Hooks
import { useGetImagesAPI } from '../hooks/api/useImages';

// Components
import { CommonContext } from '../context/CommonContext';
import { ImageBlock } from '../components/images';
import { Loader } from '../components/Loader';

// Types
import { TImage } from '../types/images.type';

const ImagesPage = () => {
  const { renderImageOption } = useContext(CommonContext);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetImagesAPI(renderImageOption);

  if (isLoading) {
    return <Loader />;
  }

  const loadMore = async () => {
    await fetchNextPage();
  };

  return (
    <Container>
      <InfiniteScroll hasMore={hasNextPage} loadMore={loadMore}>
        <Grid marginTop={2} spacing={3} container>
          {data?.pages.map((page) => page?.images.map((image: TImage) => (
            <Grid key={image.id} xs={12} sm={6} md={4} lg={4}>
              <ImageBlock image={image} />
            </Grid>
          )))}
        </Grid>
      </InfiniteScroll>
      {isFetchingNextPage
        && (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
    </Container>
  );
};

export default ImagesPage;
