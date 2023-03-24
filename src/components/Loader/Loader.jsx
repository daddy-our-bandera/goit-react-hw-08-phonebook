import { ThreeDots, RotatingTriangles } from 'react-loader-spinner';
import { PageSpinner } from './Loader.styled';
export const Loader = () => {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
export const PageLoader = () => {
  return (
    <PageSpinner>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </PageSpinner>
  );
};
