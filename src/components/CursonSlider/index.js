import React,{useState} from 'react'
import { Dimensions } from 'react-native';
import Viewcontainer from '..//containers/ViewContainer';
import ControlAlignCenter from '..//containers/ControlAlignCenter';
import Carousel from 'react-native-snap-carousel';
import DotIndicator from '..//common/DotIndicator/DotIndicator';
import Spacer from '..//containers/Spacer';
import { verticalScale, moderateScale } from 'react-native-size-matters';

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


export default function index(props) {

    const itemWidth = Dimensions.get('window').width;
    const [currentIndex, setCurrentIndex] = useState(0);
    let CarouselImages = props?.CarouselImages

    const _renderItem = ({ item, index }) => {
        return (
            <Viewcontainer>
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
                onSnapToItem={currentIndex => setCurrentIndex(currentIndex)}
            />

            <Spacer height={moderateScale(12)} />

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
    )
}
