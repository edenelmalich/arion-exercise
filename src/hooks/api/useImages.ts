// Third party
import { useInfiniteQuery } from '@tanstack/react-query';

// Data
import { QUERY_KEYS } from '../../data/enums';

// Utils
import { ImagesController } from '../../utils/api/images.api';

export function useGetImagesAPI(option: string) {
  const fetchImages = async ({ pageParam = 1 }) => {
    const pageNum = option !== 'default' ? Math.floor(Math.random() * 60) + 1 : pageParam;

    const rsp = await ImagesController().getImages(pageNum);

    return { images: rsp.data, nextPage: pageNum + 1, isLastPage: !rsp.data.length };
  };

  return useInfiniteQuery(
    [QUERY_KEYS.IMAGES, option],
    fetchImages,
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLastPage) return lastPage.nextPage;
        return undefined;
      },
      staleTime: 3 * (60 * 1000),
    },
  );
}
