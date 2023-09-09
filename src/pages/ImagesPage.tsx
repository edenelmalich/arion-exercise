import { useContext, useEffect } from 'react';

// Third party
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Hooks
import { useInView } from 'react-intersection-observer';
import { useGetImagesAPI } from '../hooks/api/useImages';

// Components
import { CommonContext } from '../context/CommonContext';
import { ImageBlock } from '../components/images';
import { Loader } from '../components/Loader';

// Types
import { TImage } from '../types/images.type';

const ImagesPage = () => {
  const { renderImageOption } = useContext(CommonContext);
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetImagesAPI(renderImageOption);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid marginTop={2} spacing={3} container>
        {data?.pages.map((page) => page?.images.map((image: TImage) => (
          <Grid key={image.id} xs={12} sm={6} md={4} lg={4}>
            <ImageBlock image={image} />
          </Grid>
        )))}
      </Grid>
      {hasNextPage
          && (
            <Box ref={ref} display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          )}
    </Container>
  );
};

export default ImagesPage;
