import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import Viewcontainer from '../../containers/ViewContainer';
import ControlAlignCenter from '../../containers/ControlAlignCenter';
import Carousel from 'react-native-snap-carousel';
import DotIndicator from '../common/DotIndicator/DotIndicator';
import Spacer from '../../containers/Spacer';

const data = [
  {
    image: require('../../assets/svg/etc/main_carousel.png'),
  },
  {
    image: require('../../assets/svg/etc/main_carousel.png'),
  },
  {
    image: require('../../assets/svg/etc/main_carousel.png'),
  },
];

export default function Index(props) {
  const itemWidth = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);
  let CarouselImages = props?.CarouselImages;

  const _renderItem = ({item, index}) => {
    return (
      <Viewcontainer index={index}>
        <ControlAlignCenter>
          <CarouselImages resizeMode="contain" source={item.image} />
        </ControlAlignCenter>
      </Viewcontainer>
    );
  };

  return (
    <>
      <Carousel
        data={data}
        layout="tinder"
        renderItem={_renderItem}
        itemWidth={itemWidth}
        sliderWidth={itemWidth}
        autoplay={true}
        loop={true}
        onSnapToItem={currentIdx => setCurrentIndex(currentIdx)}
      />

      <Spacer height={12} />

      <DotIndicator
        currentIndex={currentIndex}
        list={data}
        highlightedDotColor="#E74779"
        unhighlightedDotColor="#E3659C"
        highlightedDotHeight={8}
        highlightedDotWidth={8}
        unhighlightedDotWidth={8}
        unhighlightedDotHeight={8}
      />
    </>
  );
}
