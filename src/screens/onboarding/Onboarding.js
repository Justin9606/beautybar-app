import React, {useRef} from 'react';

import {
  SafeAreaView,
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

//containers
import Absolutebutton from '../../containers/AbsoluteButton';
//common button
import Button from '../../components/common/Buttons/Button';

import Onboarding_1 from '../../assets/icons/onboarding/onboarding_1.png';
import Onboarding_2 from '../../assets/icons/onboarding/onboarding_2.png';
import Onboarding_3 from '../../assets/icons/onboarding/onboarding_3.png';
import OnboardingRightArrow from '../../assets/svg/onboarding/onboarding_right_arrow.svg';
//style.js
import styles from './style';

const slides = [
  {
    id: '1',
    image: Onboarding_1,
    title: 'Skincare & Makeup',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: Onboarding_2,
    title: 'Skincare & Makeup',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: Onboarding_3,
    title: 'Skincare & Makeup',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const {width, height} = Dimensions.get('window');

const Slide = ({item}) => {
  let Icon = item?.image;

  return (
    <View style={{alignItems: 'center', marginTop: 50}}>
      <Image source={Icon} style={[styles.image, {width}]} />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPreviousSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const Footer = () => {
    return (
      <View style={[styles.footer, {height: height * 0.25}]}>
        <View style={styles.indicator_container}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {backgroundColor: '#E74779'},
              ]}
            />
          ))}
        </View>

        <View style={{marginBottom: 60}}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <Absolutebutton>
                <Button
                  title={'Start'}
                  onPress={() => navigation.navigate('WelComeScreen')}
                />
              </Absolutebutton>
            </View>
          ) : (
            <TouchableOpacity
              onPress={goToNextSlide}
              style={{alignSelf: 'center'}}>
              <OnboardingRightArrow />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 24,
          marginTop: 20,
        }}>
        {currentSlideIndex > 0 ? (
          <TouchableOpacity onPress={goToPreviousSlide}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <TouchableOpacity onPress={() => navigation.navigate('WelComeScreen')}>
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={slides}
        ref={ref}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        horizontal
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
