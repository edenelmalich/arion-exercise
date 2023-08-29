import { FC } from 'react';

// Third party
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';

// Types
import { TCustomImageList } from './type';
import { BASE_COLORS } from '../../utils/helpers/theme.helper';

const ImageBlock: FC<TCustomImageList> = ({ image }) => (
  <Card sx={{
    bgcolor: BASE_COLORS.bgcolor,
  }}
  >
    <CardHeader
      titleTypographyProps={{
        color: 'white',
        fontSize: 14,
      }}
      title={image.author}
    />
    <CardMedia
      component="img"
      height="194"
      srcSet={image.download_url}
      image={image.download_url}
      alt={image.id}
      loading="lazy"
    />
  </Card>
);
export {
  ImageBlock,
};
